let allProducts = [];


document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
    setupFilterListeners();
});



async function fetchProducts() {
    try {
        const response = await fetch('config/database.json');
        if (!response.ok) throw new Error('Gagal memuat data produk dari database.json');
        allProducts = await response.json();
        renderCards(allProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
        document.getElementById('product-container').innerHTML = `
            <div class="col-12 text-center text-danger">
                <p>Gagal memuat data produk. Pastikan file <code>database.json</code> tersedia.</p>
            </div>`;
    }
}



function renderCards(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    if (!products || products.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center text-muted">
                <p>Tidak ada produk yang ditemukan.</p>
            </div>`;
        return;
    }

    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6';

        const badgesHtml = product.kategori.map(cat =>
            `<span class="badge bg-success bg-opacity-10 text-success me-1">${cat}</span>`
        ).join('');

        col.innerHTML = `
            <div class="product-card p-3 h-100 d-flex flex-column glass-card" style="cursor: pointer;" onclick="showProductDetail('${product.id}')">
                <div class="bg-light rounded mb-3 d-flex align-items-center justify-content-center text-muted overflow-hidden" style="height: 180px;">
                    <img src="${product.pas_foto}" alt="${product.nama_produk}" class="w-100 h-100 object-fit-cover" onerror="this.style.display='none'; this.parentElement.innerText='${product.nama_produk}';">
                </div>
                <div class="mb-2">
                    ${badgesHtml}
                </div>
                <h5 class="fw-bold text-dark">${product.nama_produk}</h5>
                <p class="text-muted small flex-grow-1">${product.deskripsi_singkat}</p>
                <button class="btn btn-outline-success btn-sm rounded-pill mt-2 align-self-start" onclick="event.stopPropagation(); showProductDetail('${product.id}')">Lihat Detail</button>
            </div>
        `;
        container.appendChild(col);
    });
}



function setupFilterListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Ambil tombol pertama sebagai tombol "Semua"
    const semuaBtn = filterButtons[0];
    if (semuaBtn) {
        semuaBtn.classList.add('active');
    }

    filterButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            const btn = e.currentTarget;
            const category = btn.getAttribute('value');

            // Jika tombol "Semua" yang diklik
            if (index === 0 || !category) {
                filterButtons.forEach(b => b.classList.remove('active'));
                semuaBtn.classList.add('active');
            } else {
                // Jika tombol kategori lain diklik, matikan tombol "Semua"
                if (semuaBtn) semuaBtn.classList.remove('active');
                
                // Toggle status aktif pada tombol yang diklik (bisa multi-select)
                btn.classList.toggle('active');

                // Jika tidak ada satupun tombol kategori yang aktif, kembalikan ke tombol "Semua"
                const activeCategoryBtns = Array.from(filterButtons).slice(1).filter(b => b.classList.contains('active'));
                if (activeCategoryBtns.length === 0) {
                    semuaBtn.classList.add('active');
                }
            }

            // Kumpulkan semua value dari tombol kategori yang berstatus 'active'
            const activeCategories = Array.from(filterButtons)
                .slice(1)
                .filter(b => b.classList.contains('active'))
                .map(b => b.getAttribute('value'));

            // Tampilkan produk berdasarkan filter yang aktif
            if (semuaBtn.classList.contains('active') || activeCategories.length === 0) {
                renderCards(allProducts);
            } else {
                // Saring produk yang kategori-nya mencakup SEMUA kategori yang dipilih
                const filtered = allProducts.filter(p => 
                    p.kategori && activeCategories.every(cat => p.kategori.includes(cat))
                );
                renderCards(filtered);
            }
        });
    });
}



function showProductDetail(id) {
    const product = allProducts.find(p => p.id === id);
    if (!product) return;

    document.getElementById('modal-img').src = product.pas_foto;
    document.getElementById('modal-img').alt = product.nama_produk;
    document.getElementById('modal-title').textContent = product.nama_produk;

    const catContainer = document.getElementById('modal-categories');
    catContainer.innerHTML = product.kategori.map(cat =>
        `<span class="badge bg-success bg-opacity-10 text-success me-1 px-2 py-1">${cat}</span>`
    ).join('');

    document.getElementById('modal-desc').textContent = product.deskripsi_singkat;
    document.getElementById('modal-biaya').textContent = `Rp ${Number(product.estimasi_biaya).toLocaleString('id-ID')}`;

    const alatList = document.getElementById('modal-alat');
    alatList.innerHTML = product.bahan_alat && product.bahan_alat.alat ?
        product.bahan_alat.alat.map(item => `<li>${item}</li>`).join('') : '<li>-</li>';

    const bahanList = document.getElementById('modal-bahan');
    bahanList.innerHTML = product.bahan_alat && product.bahan_alat.bahan ?
        product.bahan_alat.bahan.map(item => `<li>${item}</li>`).join('') : '<li>-</li>';

    const langkahList = document.getElementById('modal-langkah');
    langkahList.innerHTML = product.cara_membuat ?
        product.cara_membuat.map(step => `<li>${step}</li>`).join('') : '<li>-</li>';

    const modalElement = document.getElementById('productModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
}