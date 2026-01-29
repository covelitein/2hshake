create extension if not exists "uuid-ossp";

create table users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  password_hash text not null,
  display_name text not null,
  avatar_url text,
  bio text,
  verified boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table sessions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade,
  refresh_token text not null,
  device text,
  created_at timestamptz default now(),
  expires_at timestamptz not null
);

create table circles (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text,
  goal_amount bigint,
  currency text not null,
  created_by uuid references users(id),
  created_at timestamptz default now()
);

create table circle_members (
  circle_id uuid references circles(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  role text not null,
  joined_at timestamptz default now(),
  primary key (circle_id, user_id)
);

create table accounts (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid,
  owner_type text not null,
  account_type text not null,
  currency text not null,
  created_at timestamptz default now()
);

create table transactions (
  id uuid primary key default uuid_generate_v4(),
  idempotency_key text unique,
  reference text,
  description text,
  metadata jsonb,
  created_at timestamptz default now()
);

create table entries (
  id uuid primary key default uuid_generate_v4(),
  transaction_id uuid references transactions(id) on delete cascade,
  account_id uuid references accounts(id) on delete cascade,
  amount bigint not null,
  direction text not null,
  created_at timestamptz default now()
);

create table feed_items (
  id uuid primary key default uuid_generate_v4(),
  actor_id uuid references users(id) on delete set null,
  circle_id uuid references circles(id) on delete set null,
  message text not null,
  privacy text not null,
  metadata jsonb,
  created_at timestamptz default now()
);

create table reactions (
  id uuid primary key default uuid_generate_v4(),
  feed_id uuid references feed_items(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  emoji text not null,
  created_at timestamptz default now()
);

create table comments (
  id uuid primary key default uuid_generate_v4(),
  feed_id uuid references feed_items(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  body text not null,
  created_at timestamptz default now()
);

create table notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade,
  title text not null,
  body text not null,
  read_at timestamptz,
  created_at timestamptz default now()
);

create index idx_entries_account_id on entries(account_id);
create index idx_entries_transaction_id on entries(transaction_id);
create index idx_feed_items_circle_id on feed_items(circle_id);
create index idx_feed_items_actor_id on feed_items(actor_id);
create index idx_reactions_feed_id on reactions(feed_id);
create index idx_comments_feed_id on comments(feed_id);
