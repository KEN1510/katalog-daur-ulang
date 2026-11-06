## TUJUAN / FUNGSI FITUR
Memudahkan pengguna saat mencari dan memfilter ide prakarya berdasarkan kebutuhannya.


## ISI FILTER (PILS BUTTON)
* Semua Kategori
* Botol Plastik
* Tutup Botol
* Plastik Lain
* Kertas Karton
* Besi Kaleng


## ELEMEN PENTING
### ID
*
### NAME
*
### CLASS
*


## ALUR KERJA / LOGIKA
1. Terima Event change dari pengguna pada class button pils
2. Kumpulkan data kategori yang di "change" dalam satu array

3. Ambil data pada dari file database.json berdasarkan kategori
4. Simpan semua data yang cocok dalam sebuah array

5. pastikan section yang menampilkan semua card ada
6. lakukan iterasi untuk membuat card baru berisi data produk.