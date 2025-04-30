// Destinations Data
const destinations = [
    {
        title: "Malam Jabba",
        image: "malamjaba.jpg",
        description: "Famous ski resort with breathtaking mountain views",
        location: "34.2026° N, 72.4843° E"
    },
    {
        title: "Gabin Jabba",
        image: "gabeenjabba.jpg",
        description: "Scenic hiking trails with breathtaking mountain views",
        location: "35.4153° N, 72.3314 E"
    },
    {
        title: "Madyan",
        image: "madyan.jpg",
        description: "Refreshing Streams,Lush green landscapes and breathtaking mountain views",
        location: "35.13333° N, 72.53333 E"
    },
    {
        title: "Bahrain",
        image: "bahrain.jpg",
        description: "The ancient Dilmun Burial Mounds,The Bahrain Fort",
        location: "26.0667 N, 50.5500 E"
    },
    {
        title: "Kalam",
        image: "kalam.jpg",
        description: "Kalam is a picturesque valley in Swat,known for its breathtaking mountain scenery,serene lakes and lush green meadows",
        location: "35.4733 N, 72.5864 E"
    },
    {
        title: "Mahodand Lake",
        image: "mahodand.jpg",
        description: "Pristine alpine lake surrounded by mountains",
        location: "35.5453° N, 72.5366° E"
    },
    {
        title: "Shahi Bagh",
        image: "shahibagh.jpg",
        description: "Royal Gardens Of Swat,Beautiful terraced lawns,Vibrant flower arrangements,stunning architecture",
        location: "34.7792 N, 72.3597 E"
    },
    {
        title: "Mankiyal Meadows",
        image: "mankiyal.jpg",
        description: "Lush green lanscapes,Snow-capped mountains,Scenic hiking trails and refreshing streams",
        location: "34.7833 N, 72.5333 E"
    },
    // Add more destinations
];

// Gallery Images
const galleryImages = [
    "malamjaba.jpg",
    "gabeenjabba.jpg",
    "madyan.jpg",
    "bahrain.jpg",
    "kalam.jpg",
    "mahodand.jpg",
    "shahibagh.jpg",
    "mankiyal.jpg",
    // Add more images
];

// Initialize Destinations
function initDestinations() {
    const container = document.getElementById('destinationsContainer');
    
    destinations.forEach(dest => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.title}">
            <div class="card-content">
                <h3>${dest.title}</h3>
                <p>${dest.description}</p>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${dest.location}
                </div>
                <button class="btn guide-btn">View Guide</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Initialize Gallery
function initGallery() {
    const gallery = document.querySelector('.gallery-grid');
    
    galleryImages.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${img}" alt="Swat Landscape">`;
        gallery.appendChild(item);
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initDestinations();
    initGallery();
    
    // Add interactive map functionality
    const guideButtons = document.querySelectorAll('.guide-btn');
    guideButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Add guide functionality
            alert('Downloading location guide...');
        });
    });
});