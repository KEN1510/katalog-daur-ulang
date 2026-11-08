## ISI FILTER (PILS BUTTON)
* Semua (Tombol pertama tanpa atribut value)
* Alat Elektronik (`value="alat-elektronik"`)
* Botol Plastik (`value="botol-plastik"`)
* Plastik Lain (`value="plastik-lain`)
* Tutup Botol (`value="tutup-botol"`)
* Kertas Karton (`value="kertas-karton"`)
* Besi Kaleng (`value="besi-kaleng"`)



## ELEMEN PENTING
### ID
* `#product-container` -> Kontainer utama tempat card produk dirender secara dinamis oleh JavaScript.
* `#productModal` -> Elemen modal Bootstrap utama untuk pop-up detail produk.
* `#modal-img` -> Elemen tag `<img>` di dalam modal untuk menampilkan foto produk.
* `#modal-title` -> Elemen teks untuk menampilkan nama produk di dalam modal.
* `#modal-categories` -> Kontainer penampung badge kategori produk di dalam modal.
* `#modal-desc` -> Elemen teks untuk deskripsi singkat produk di dalam modal.
* `#modal-biaya` -> Elemen teks untuk menampilkan estimasi biaya produk di dalam modal.
* `#modal-alat` -> Elemen daftar (`<ul>`) untuk menampilkan daftar alat yang dibutuhkan.
* `#modal-bahan` -> Elemen daftar (`<ul>`) untuk menampilkan daftar bahan yang dibutuhkan.
* `#modal-langkah` -> Elemen daftar berurut (`<ol>`) untuk menampilkan langkah-langkah pembuatan.

### CLASS
* `.filter-btn` -> Tombol kategori / pills toggle untuk filter produk.
* `.product-card` -> Kartu produk individual yang nantinya digenerate oleh JavaScript dan bisa diklik untuk membuka modal.



## ALUR KERJA / LOGIKA
### 1. Saat Halaman Dimuat (DOMContentLoaded)
1. Browser menjalankan fungsi `fetch()` untuk mengambil data dari file `database.json`.
2. Jika berhasil, data disimpan ke dalam variabel global (contoh: `allProducts`).
3. Jalankan fungsi `renderCards(allProducts)` untuk merender semua produk ke dalam kontainer HTML (`#product-container`) menggunakan Bootstrap Grid dan Card.

### 2. Logika Filter Berdasarkan Kategori (Pills Toggle)
1. Tangkap *event click* pada tombol filter (`.filter-btn`).
2. Ubah kelas aktif (`.active` / tombol gelap) ke tombol yang sedang diklik.
3. Ambil nilai atribut kategori dari tombol tersebut (contoh: `data-category="tutup-botol"`).
4. Lakukan penyaringan (*filtering*) pada variabel `allProducts`:
   * Jika `"all"`, tampilkan semua produk.
   * Jika kategori spesifik, saring produk yang *array* `kategorinya` mencakup kategori tersebut (`product.kategori.includes(...)`).
5. Kosongkan kontainer card, lalu render ulang card berdasarkan data yang lolos filter.

### 3. Logika Modal Detail Produk
1. Saat sebuah *card* atau tombol "Lihat Detail" diklik, ambil ID produk yang bersangkutan.
2. Cari data spesifik produk tersebut di dalam variabel `allProducts` berdasarkan ID-nya.
3. Masukkan data (gambar, judul, kategori, alat, bahan, estimasi biaya, dan cara membuat) ke dalam elemen-elemen di dalam modal Bootstrap.
4. Tampilkan modal menggunakan instance komponen modal Bootstrap (`bootstrap.Modal`).