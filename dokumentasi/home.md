## TUJUAN / FUNGSI FITUR
bagian dan halaman utama dari projek yang nantinya akan menampilkan card-card yang berisi nama produk, foto, dan deskripsi singkat.
serta dilengkapi dengan fitur filter (Tag / Pills Toggle Buttons) yang berisi alat elektronik, botol plastik, tutup botol, dan plastik lain.



## ELEMEN PENTING
### ID
*
### NAME
*
### CLASS
*



## DESAIN HALAMAN (TEKS KASAR)
### HEADER
*

### MAIN
* Background berwana hijau limau muda #B9FF66

### CARD
* Background Putih Secara Default
* Shadow + Animasi Hover
* Warna Border Berdasarkan Kategori (jika ada lebih dari satu, maka ambil yang pertama)
* Urutan Atas-Bawah: Foto, Nama, Deskripsi, Button Lihat Detail.

### FOOTER
*



## ALUR KERJA
* User Masuk Ke Website Pertama kali;
* User menclick salah satu btton pil filter (atau lebih);
* JS mendeteksi perubahan,
* JS mengambil data dari database.json berdasarkan kategori,
* JS memperbarui tampilan home dan mengisisnya dengan card baru;
  
* User Mengklik area card atau anchor lihat detail,
* Modal card baru muncul memunculkan data produk termasuk fotonya,
* Saat user area luar modal card atau simbol silang di pojok kanan atas,
* Modal card detail itu langsung tertutup.