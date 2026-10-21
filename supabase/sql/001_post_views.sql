-- Jalankan file ini di Supabase Dashboard -> SQL Editor
-- Membuat tabel counter jumlah baca per slug + function increment yang aman untuk dipanggil dari client.

create table if not exists public.post_views (
  slug text primary key,
  view_count bigint not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.post_views enable row level security;

-- Publik hanya boleh membaca, tidak boleh insert/update/delete langsung ke tabel.
create policy "Allow public read on post_views"
  on public.post_views
  for select
  to anon
  using (true);

-- Satu-satunya cara menambah angka: lewat function ini (security definer, bypass RLS secara terkontrol).
create or replace function public.increment_view_count(p_slug text)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  new_count bigint;
begin
  insert into public.post_views (slug, view_count, updated_at)
  values (p_slug, 1, now())
  on conflict (slug)
  do update set view_count = post_views.view_count + 1, updated_at = now()
  returning view_count into new_count;

  return new_count;
end;
$$;

grant execute on function public.increment_view_count(text) to anon;
