// Dummy Data for detikAlfaGaming
const mockNews = [
    {
        title: "Eksklusif: Review Mendalam 'AetherForge', Standar Baru MMORPG 2026",
        category: "AlfaNews",
        time: "10 Menit yang lalu",
        img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        type: "headline"
    },
    {
        title: "Ufotable Konfirmasi Adaptasi Anime 'Sekiro', Rilis Akhir Tahun",
        category: "alfaAnime",
        time: "35 Menit yang lalu",
        img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        type: "headline"
    },
    {
        title: "T1 Rebut Gelar Juara Dunia Lagi, Faker Pecahkan Rekor Baru",
        category: "alfaEsport",
        time: "1 Jam yang lalu",
        img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        type: "headline"
    },
    {
        title: "Bocoran Spesifikasi PlayStation 6: Resolusi 8K Native dan AI Upscaling",
        category: "alfaGadget",
        time: "2 Jam yang lalu",
        img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        type: "headline"
    },
    {
        title: "Jujutsu Kaisen Season 3 Rilis Trailer Perdana, Animasi Makin Pecah!",
        category: "alfaAnime",
        time: "3 Jam yang lalu",
        img: "https://images.unsplash.com/photo-1580477651817-e4b2d5f30691?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        type: "list"
    },
    {
        title: "Film Live Action Zelda Tunjuk Sutradara Maze Runner",
        category: "alfaFilm",
        time: "4 Jam yang lalu",
        img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        type: "list"
    },
    {
        title: "Review iPhone 18 Pro Max untuk Mobile Gaming: Overkill?",
        category: "alfaGadget",
        time: "5 Jam yang lalu",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        type: "list"
    },
    {
        title: "Acara Pop Culture Terbesar 'AlfaCon 2026' Siap Digelar di Jakarta",
        category: "alfaLifestyle",
        time: "6 Jam yang lalu",
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        type: "list"
    },
    {
        title: "Genshin Impact Update 6.0: Region Baru dan Karakter Bintang 5 Gratis",
        category: "AlfaNews",
        time: "7 Jam yang lalu",
        img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        type: "list"
    }
];

const popularNews = [
    { title: "Bocoran Skin Kolaborasi Mobile Legends x Jujutsu Kaisen Part 2", category: "alfaEsport" },
    { title: "Link Nonton One Piece Episode 1150 Sub Indo Gratis", category: "alfaAnime" },
    { title: "Review Jujur Game 'AetherForge': Worth It Dimainkan?", category: "AlfaNews" },
    { title: "Daftar Lengkap Pemenang detikAlfaGaming Signature Awards 2026", category: "alfaLifestyle" },
    { title: "Spesifikasi PC Minimum untuk Main GTA VI, Siapkan Dompet!", category: "alfaGadget" }
];

const recommendationNews = [
    { title: "Kisah Sedih Mangaka Hunter x Hunter dan Perjuangannya", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", category: "alfaAnime" },
    { title: "Setup Meja Gaming Minimalis Estetik 2026", img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", category: "alfaLifestyle" },
    { title: "Fakta Tersembunyi di Balik Ending Film Interstellar", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", category: "alfaFilm" }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('menu-overlay');

    const toggleMenu = () => {
        mobileSidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileSidebar.classList.contains('active') ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // 2. Render Headline News
    const headlineContainer = document.getElementById('headline-container');
    const headlines = mockNews.filter(news => news.type === 'headline');
    
    headlines.forEach(news => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${news.img}" alt="${news.title}" class="card-img" loading="lazy">
            <div class="card-content">
                <span class="card-category">${news.category}</span>
                <h4 class="card-title">${news.title}</h4>
                <span class="card-meta">${news.time}</span>
            </div>
        `;
        headlineContainer.appendChild(card);
    });

    // 3. Render Latest News
    const latestContainer = document.getElementById('latest-news-container');
    const lists = mockNews.filter(news => news.type === 'list');
    
    lists.forEach(news => {
        const item = document.createElement('article');
        item.className = 'list-item';
        item.innerHTML = `
            <img src="${news.img}" alt="${news.title}" class="list-img" loading="lazy">
            <div class="list-content">
                <span class="card-category">${news.category}</span>
                <h4 class="list-title">${news.title}</h4>
                <span class="card-meta">${news.time}</span>
            </div>
        `;
        latestContainer.appendChild(item);
    });

    // 4. Render Popular News (Sidebar)
    const popularContainer = document.getElementById('popular-container');
    popularNews.forEach(news => {
        const li = document.createElement('li');
        li.className = 'popular-item';
        li.innerHTML = `
            <div>
                <span class="card-category" style="font-size:10px; margin-bottom:2px;">${news.category}</span>
                <a href="#" class="popular-title">${news.title}</a>
            </div>
        `;
        popularContainer.appendChild(li);
    });

    // 5. Render Recommendations
    const recContainer = document.getElementById('recommendation-container');
    recommendationNews.forEach(news => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.style.padding = '0';
        item.style.boxShadow = 'none';
        item.style.background = 'transparent';
        item.style.borderBottom = '1px solid var(--border-color)';
        item.style.borderRadius = '0';
        item.style.paddingBottom = '12px';
        
        item.innerHTML = `
            <img src="${news.img}" alt="${news.title}" class="list-img" style="width:80px; height:80px;" loading="lazy">
            <div class="list-content">
                <span class="card-category" style="font-size:10px;">${news.category}</span>
                <h4 class="list-title" style="font-size:13px; margin:2px 0;">${news.title}</h4>
            </div>
        `;
        recContainer.appendChild(item);
    });
});
