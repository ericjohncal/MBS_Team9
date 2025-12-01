drop table if exists movies cascade;

create table movies (
  id bigserial primary key,
  title text not null,
  genre text,
  rating numeric,
  duration text,
  image text,
  is_current boolean default false,
  is_upcoming boolean default false
);
