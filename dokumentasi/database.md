## TUJUAN / FUNGSI FITUR
Sebuah file yang menyimpan data terkait prakarya yang terbuat dari sampah daur ulang. berisi nama produk, kategori, deskripsi singkat, pas foto, bahan dan alat, cara untuk membuat, estimasi biaya (perkiraan).


## Kategori dan Jenis Sampah
* alat-elektronik (warna ...)
* botol-plastik (warna ...)
* tutup-botol (warna ...)
* plastik-lain (warna ...)
* kertas-karton (warna ...)
* besi-kaleng (warna ...)


## STRUKTUR FILE database.json (contoh)
[
    {
        "id": "1",
        "nama_produk": "Jam Dinding Tutup Botol",
        "kategori": ["tutup-botol", "alat-elektronik"],
        "deskripsi_singkat": "Jam dinding estetik dari rangkaian tutup botol dan mesin jam bekas.",
        "pas_foto": "uploads/jam-dinding.jpg",
        "bahan_alat": {
            "alat": ["Lem tembak", "Gunting", "Obeng"],
            "bahan": ["Tutup botol bekas (30 pcs)", "Mesin jam dinding lama", "Kardus tebal"]
        },
        "cara_membuat": [
            "Potong kardus berbentuk lingkaran sebagai alas.",
            "Susun dan tempel tutup botol melingkar menggunakan lem tembak.",
            "Pasang mesin jam di bagian tengah alas kardus."
        ],
        "estimasi_biaya": 5000
    }
]

catatan: satu produk bisa punya jenis sampah yang mungkin sama atau bisa dibilang produk tersebut memerlukan lebih dari satu jenis sampah, misal membutuhkan tutup botol bekas dan alat elektronik untuk membuat jam dinding dengan hiasan tutup botol.