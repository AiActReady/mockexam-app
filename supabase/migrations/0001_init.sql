-- AI Act Ready: Learn — initial schema
-- Run via `supabase db push` or the Supabase SQL editor.

create extension if not exists "pgcrypto";

-- ── Profiles (extends Supabase auth.users) ─────────────────────────────────
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  role text not null default 'learner' check (role in ('learner', 'admin')),
  exam_track_id uuid,
  accessibility_prefs jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- ── Content hierarchy ───────────────────────────────────────────────────────
create table public.exam_tracks (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  syllabus_weighting jsonb not null default '{}'::jsonb, -- { "topicSlug": 0.2, ... }
  duration_mins int,
  passing_score int,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  track_id uuid not null references public.exam_tracks(id) on delete cascade,
  title text not null,
  sort_order int not null default 0
);

create table public.modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null,
  summary text,
  sort_order int not null default 0
);

create table public.concepts (
  id uuid primary key default gen_random_uuid(),
  module_id uuid references public.modules(id) on delete set null,
  name text not null,
  description text,
  related_concept_ids uuid[] not null default '{}'
);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.modules(id) on delete cascade,
  title text not null,
  sort_order int not null default 0,
  explain_it text,
  simpler_version text,
  why_it_matters text,
  remember_it text,
  exam_tip text,
  example text,
  audio_enabled boolean not null default true,
  concept_ids uuid[] not null default '{}',
  source_id uuid
);

create table public.glossary_terms (
  id uuid primary key default gen_random_uuid(),
  term text not null unique,
  formal_meaning text not null,
  plain_meaning text not null,
  example text,
  exam_relevance text,
  related_term_ids uuid[] not null default '{}',
  source_id uuid
);

-- ── Content sourcing / traceability ─────────────────────────────────────────
create table public.content_sources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  url text,
  source_type text not null check (source_type in ('official', 'guidance', 'standard')),
  version_label text,
  date_reviewed date,
  last_updated date
);

alter table public.lessons
  add constraint lessons_source_fk foreign key (source_id) references public.content_sources(id);
alter table public.glossary_terms
  add constraint glossary_source_fk foreign key (source_id) references public.content_sources(id);

-- ── Questions & attempts ────────────────────────────────────────────────────
create table public.questions (
  id uuid primary key default gen_random_uuid(),
  track_id uuid not null references public.exam_tracks(id) on delete cascade,
  concept_ids uuid[] not null default '{}',
  type text not null check (type in ('mcq', 'multi', 'tf', 'scenario', 'classify', 'match')),
  difficulty smallint not null default 2 check (difficulty between 1 and 5),
  prompt text not null,
  options jsonb not null default '[]'::jsonb,
  correct_answer jsonb not null,
  explanation_correct text,
  explanation_incorrect text,
  misconception_tag text,
  source_id uuid references public.content_sources(id)
);

create table public.question_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  session_id uuid,
  selected_answer jsonb,
  is_correct boolean not null,
  confidence_rating smallint check (confidence_rating between 1 and 5),
  time_taken_ms int,
  created_at timestamptz not null default now()
);

create table public.revision_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  concept_id uuid not null references public.concepts(id) on delete cascade,
  next_due_at timestamptz not null default now(),
  interval_days int not null default 1,
  ease_factor numeric not null default 2.5,
  last_outcome text,
  updated_at timestamptz not null default now(),
  unique (user_id, concept_id)
);

create table public.mock_exams (
  id uuid primary key default gen_random_uuid(),
  track_id uuid not null references public.exam_tracks(id) on delete cascade,
  name text not null,
  question_count int not null default 20,
  duration_mins int not null default 40,
  is_timed boolean not null default true
);

create table public.mock_exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  mock_exam_id uuid not null references public.mock_exams(id) on delete cascade,
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  score_pct numeric,
  topic_breakdown jsonb,
  status text not null default 'in_progress' check (status in ('in_progress', 'submitted'))
);

create table public.learning_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null check (type in ('lesson', 'quiz', 'revision', 'mock')),
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  lesson_ids uuid[] default '{}',
  question_ids uuid[] default '{}'
);

-- ── Admin audit trail ────────────────────────────────────────────────────────
create table public.admin_audit_log (
  id uuid primary key default gen_random_uuid(),
  admin_user_id uuid not null references auth.users(id),
  table_name text not null,
  record_id uuid not null,
  action text not null check (action in ('insert', 'update', 'delete')),
  diff jsonb,
  created_at timestamptz not null default now()
);

-- ── Row Level Security ───────────────────────────────────────────────────────
alter table public.profiles enable row level security;
alter table public.question_attempts enable row level security;
alter table public.revision_items enable row level security;
alter table public.mock_exam_attempts enable row level security;
alter table public.learning_sessions enable row level security;

-- Content tables are readable by any authenticated user, writable only via
-- the admin client (service role), so no policy is added for writes here.
alter table public.exam_tracks enable row level security;
alter table public.courses enable row level security;
alter table public.modules enable row level security;
alter table public.concepts enable row level security;
alter table public.lessons enable row level security;
alter table public.glossary_terms enable row level security;
alter table public.questions enable row level security;

create policy "learners read own profile" on public.profiles
  for select using (auth.uid() = id);
create policy "learners update own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "learners manage own attempts" on public.question_attempts
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "learners manage own revision items" on public.revision_items
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "learners manage own mock attempts" on public.mock_exam_attempts
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "learners manage own sessions" on public.learning_sessions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "authenticated read content" on public.exam_tracks for select using (auth.role() = 'authenticated');
create policy "authenticated read content" on public.courses for select using (auth.role() = 'authenticated');
create policy "authenticated read content" on public.modules for select using (auth.role() = 'authenticated');
create policy "authenticated read content" on public.concepts for select using (auth.role() = 'authenticated');
create policy "authenticated read content" on public.lessons for select using (auth.role() = 'authenticated');
create policy "authenticated read content" on public.glossary_terms for select using (auth.role() = 'authenticated');
create policy "authenticated read content" on public.questions for select using (auth.role() = 'authenticated');

-- ── Auto-create a profile row on signup ─────────────────────────────────────
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, new.raw_user_meta_data->>'display_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
