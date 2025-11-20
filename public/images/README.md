# 📸 Panduan Gambar

## 🖼️ Gambar yang Diperlukan

### 1. Foto Profil
- **File**: `profil.png`
- **Ukuran**: 300x300px
- **Format**: PNG dengan background transparan
- **Digunakan**: Hero section homepage

### 2. Blog Thumbnails
- **File**: `blog-1.jpg`, `blog-2.jpg`, `blog-3.jpg`
- **Ukuran**: 400x300px (4:3 ratio)
- **Format**: JPG
- **Digunakan**: Thumbnail artikel blog

### 3. Product Images
- **File**: `product-1.jpg`, `product-2.jpg`, `product-3.jpg`, `product-4.jpg`
- **Ukuran**: 800x600px (4:3 ratio)
- **Format**: JPG
- **Digunakan**: Gambar produk di catalog dan detail

## 📝 Cara Menambah Gambar

1. **Siapkan gambar** dengan ukuran dan format yang sesuai
2. **Rename file** sesuai dengan nama yang diperlukan
3. **Copy ke folder** `static/images/`
4. **Gambar otomatis tersedia** di URL `/images/nama-file.jpg`

## 🎨 Tips Optimasi

- **Compress gambar** sebelum upload (gunakan TinyPNG, ImageOptim)
- **Gunakan format WebP** untuk performa lebih baik
- **Pastikan aspect ratio** sesuai agar tidak terdistorsi
- **Alt text** sudah diatur otomatis di template

## 🔗 Reference di Code

Gambar akan otomatis digunakan berdasarkan:
- **Profil**: `{{ .Site.Params.heroImage }}` di `hugo.toml`
- **Blog**: `thumbnail: "/images/blog-1.jpg"` di front matter
- **Produk**: `image: "/images/product-1.jpg"` di front matter