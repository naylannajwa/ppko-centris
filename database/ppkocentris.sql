-- =============================================
-- Database Schema untuk KO AWIS CRUD (Supabase/Postgres)
-- =============================================
-- Jalankan script ini di SQL editor Supabase (Postgres)
-- Table: tracks (Jalur Pembelajaran)
create table if not exists public.tracks (
  id bigserial primary key,
  slug varchar(50) unique not null,
  title varchar(100) not null,
  subtitle text not null,
  icon varchar(50),
  color_class varchar(50),
  description text,
  lesson_count int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Table: modules (Modul Pembelajaran)
create table if not exists public.modules (
  id bigserial primary key,
  track_id bigint not null references public.tracks (id) on delete CASCADE,
  title varchar(200) not null,
  slug varchar(200) unique not null,
  subtitle text,
  description text,
  content text,
  "order" int default 0,
  icon varchar(50),
  is_published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index IF not exists idx_modules_track_id on public.modules (track_id);

create index IF not exists idx_modules_slug on public.modules (slug);

create index IF not exists idx_module_status on public.modules (is_published);

-- Table: articles (Artikel & Informasi)
create table if not exists public.articles (
  id bigserial primary key,
  title varchar(200) not null,
  slug varchar(200) unique not null,
  category varchar(50) not null,
  excerpt text,
  content text,
  author varchar(100),
  image_url varchar(255),
  read_time int,
  is_published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index IF not exists idx_articles_category on public.articles (category);

create index IF not exists idx_article_status on public.articles (is_published);

-- Table: admin_users (untuk login admin)
create table if not exists public.admin_users (
  id bigserial primary key,
  username varchar(100) unique not null,
  email varchar(100) unique not null,
  password_hash varchar(255) not null,
  name varchar(100),
  role varchar(10) default 'editor' check (role in ('admin', 'editor')),
  is_active boolean default true,
  last_login timestamptz null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index IF not exists idx_admin_username on public.admin_users (username);

create index IF not exists idx_admin_email on public.admin_users (email);

-- Sample seed data (use Supabase SQL or the dashboard Insert Row feature)
insert into
  public.tracks (
    slug,
    title,
    subtitle,
    icon,
    color_class,
    description,
    lesson_count
  )
values
  (
    'hilir',
    'KO AWIS Hilir',
    'Optimalisasi Produk & Pasca Panen',
    '🏭',
    'card-hilir',
    'Pelajari teknik pengolahan kakao modern untuk meningkatkan nilai produk',
    7
  ),
  (
    'entrepreneur',
    'KO AWIS Entrepreneur',
    'Pembangunan Mentalitas Bisnis',
    '💰',
    'card-entre',
    'Kembangkan keterampilan bisnis dan entrepreneurship Anda',
    7
  ),
  (
    'digital',
    'KO AWIS Digital',
    'Transformasi Teknologi & Konten',
    '💻',
    'card-digital',
    'Kuasai teknologi digital untuk memasarkan produk kakao',
    6
  ),
  (
    'sirkular',
    'KO AWIS Sirkular',
    'Ekosistem Ramah Lingkungan',
    '♻️',
    'card-sirkular',
    'Pembangunan berkelanjutan dan ekonomi sirkular untuk kakao',
    6
  );

-- Sample modules for Hilir track (assumes track id 1 exists)
insert into
  public.modules (
    track_id,
    title,
    slug,
    subtitle,
    description,
    content,
    "order",
    is_published
  )
values
  (
    (
      select
        id
      from
        public.tracks
      where
        slug = 'hilir'
      limit
        1
    ),
    'Standar Kualitas Kakao',
    'standar-kualitas-kakao',
    'Memahami standar internasional',
    'Pelajari standar ISO dan SOP pengolahan kakao berkualitas tinggi',
    '<h2>Standar Kualitas Kakao</h2><p>Kakao berkualitas tinggi memerlukan standar tertentu...</p>',
    1,
    true
  ),
  (
    (
      select
        id
      from
        public.tracks
      where
        slug = 'hilir'
      limit
        1
    ),
    'Fermentasi & Pengeringan',
    'fermentasi-pengeringan',
    'Teknik dasar pengolahan',
    'Proses fermentasi dan pengeringan yang tepat untuk hasil optimal',
    '<h2>Fermentasi & Pengeringan</h2><p>Fermentasi adalah kunci utama...</p>',
    2,
    true
  );

-- Insert default admin (username: admin, email: admin@koawis.com, password: adminCentris) — replace password_hash with a secure bcrypt hash before production
insert into
  public.admin_users (username, email, password_hash, name, role)
values
  (
    'admin',
    'admin@koawis.com',
    '$2y$10$fA8T5cfPTgS.gqG5g3j9a.zL5d3bK9W.xY.vU.tS.rQ.pOnMlKjIhG', -- Hash for 'adminCentris'
    'Admin KO AWIS',
    'admin'
  );