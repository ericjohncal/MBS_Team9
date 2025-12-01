-- profiles: user can see/update only their own
alter table profiles enable row level security;

create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);

-- bookings: user can see only their own
alter table bookings enable row level security;

create policy "Users can view own bookings"
  on bookings for select
  using (auth.uid() = user_id);

create policy "Users can create own bookings"
  on bookings for insert
  with check (auth.uid() = user_id);
