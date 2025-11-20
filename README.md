# 🌿 Budak Lembur - Hugo Blog

Blog pribadi modern yang dibangun dengan **Hugo** dan **Tailwind CSS**.

## ✨ Fitur

- **Design Modern**: Interface yang clean dan minimalis dengan warna fresh
- **Responsive Design**: Optimal di desktop dan mobile
- **Blog System**: Sistem blog lengkap dengan tag dan kategori
- **Product Catalog**: Showcase produk digital
- **SEO Optimized**: Meta tags dan structured data

## 🚀 Tech Stack

- **Framework**: [Hugo](https://gohugo.io/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Theme**: Custom theme "budaklembur-theme"

## 🛠️ Instalasi

1. **Install Hugo**: https://gohugo.io/installation/

2. **Clone repository**:
   ```bash
   git clone <repository-url>
   cd budaklembur-hugo
   ```

3. **Jalankan development server**:
   ```bash
   hugo server -D
   ```

4. **Buka browser**: http://localhost:1313

## 📝 Commands

```bash
# Development server
hugo server -D

# Build production
hugo --gc --minify

# Build dengan drafts
hugo --buildDrafts
```

## 📁 Struktur

```
budaklembur-hugo/
├── content/                 # Konten markdown
│   ├── blog/               # Blog posts
│   ├── produk/             # Product pages
│   ├── tentang.md          # About page
│   └── kontak.md           # Contact page
├── static/                 # Static assets
│   └── images/             # Gambar (foto profil, blog, produk)
├── themes/budaklembur-theme/ # Custom Hugo theme
│   ├── layouts/            # Template files
│   └── static/             # Theme assets (CSS, JS)
└── hugo.toml               # Hugo configuration
```

## 🖼️ Struktur Gambar

### Lokasi Gambar
```
static/
├── images/
│   └── profil.png      # Foto profil untuk hero section
├── produk/
│   └── no-thumb.jpg    # Gambar default untuk produk
└── post/
    └── no-thumb.jpg    # Gambar default untuk blog post
```

### Gambar yang Diperlukan
1. **Foto Profil**: `static/images/profil.png` (300x300px)
2. **Default Produk**: `static/produk/no-thumb.jpg` (800x600px)
3. **Default Blog**: `static/post/no-thumb.jpg` (400x300px)

### Cara Menggunakan
- **Profil**: Otomatis digunakan dari `static/images/profil.png`
- **Produk**: Jika tidak ada `image` di front matter, akan menggunakan `/produk/no-thumb.jpg`
- **Blog**: Jika tidak ada `thumbnail` di front matter, akan menggunakan `/post/no-thumb.jpg`

### Format yang Disarankan
- **Format**: JPG, PNG, WebP
- **Ukuran file**: Max 1MB per file
- **Mobile**: Produk ditampilkan 2 kolom per baris

## 🎨 Kustomisasi

Edit `hugo.toml` untuk mengubah konfigurasi site:

```toml
title = 'Nama Site Anda'
[params]
  siteName = "Nama Site"
  description = "Deskripsi site Anda"
  heroImage = "/images/profil.png"
```

## 📱 WhatsApp Integration

- **Nomor WhatsApp**: +628161112148
- **Tombol WhatsApp** tersedia di:
  - Halaman detail produk (tombol utama)
  - Halaman daftar produk (tombol kecil)
  - Homepage products section
- **Pesan otomatis** berisi nama produk yang dipilih
- **Tidak ada keranjang belanja** - semua order langsung ke WhatsApp

## 📄 Lisensi

MIT License - Silakan gunakan untuk proyek pribadi atau komersial.