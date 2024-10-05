// Initialize Leaflet map
const map = L.map('map').setView([51.505, -0.09], 13);  // Default to London
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Sample markers for GHG emission sources (replace with real data later)
const marker1 = L.marker([51.5, -0.09]).addTo(map).bindPopup('Methane Emissions Site');
const marker2 = L.marker([51.51, -0.1]).addTo(map).bindPopup('CO2 Emission Factory');

// Data Upload Form Handling
document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    // Handle file upload and data visualization (implement file reading later)
    alert('Dataset uploaded successfully! Analyzing...');
});

// Data Visualization with Chart.js
const ctx = document.getElementById('emission-chart').getContext('2d');
const emissionChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April'], // Sample months
        datasets: [{
            label: 'CO2 Emissions (in tons)',
            data: [12, 19, 3, 5],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});
