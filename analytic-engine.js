// analytic-script.js

// 1. Data Dummy (Sesuai dengan yang kita bahas sebelumnya)
const tracksData = [
    { name: "System Overload", valence: 0.8, energy: 0.9, dance: 0.7, acoustic: 0.1, tempo: 145 },
    { name: "Morning Dew", valence: 0.6, energy: 0.2, dance: 0.3, acoustic: 0.9, tempo: 75 },
    { name: "Deep Rest", valence: 0.4, energy: 0.1, dance: 0.2, acoustic: 0.95, tempo: 60 }
];

document.addEventListener('DOMContentLoaded', () => {
    // --- LINE CHART (Mood Velocity) ---
    const moodCtx = document.getElementById('moodChart').getContext('2d');
    new Chart(moodCtx, {
        type: 'line',
        data: {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [{
                label: 'Valence level',
                data: [0.4, 0.6, 0.5, 0.8, 0.7, 0.9, 0.85], // Data dummy mingguan
                borderColor: '#000',
                borderWidth: 4,
                backgroundColor: '#FF6B6B',
                fill: true,
                tension: 0, // Garis kaku biar makin Brutalist
                pointRadius: 6,
                pointBackgroundColor: '#000'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { display: false, min: 0, max: 1 },
                x: { display: false }
            }
        }
    });

    // --- RADAR CHART (Radar Profile) ---
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: ['ENERGY', 'VALENCE', 'DANCE', 'ACOUSTIC', 'TEMPO'],
            datasets: [{
                label: 'Current State',
                data: [0.9, 0.7, 0.6, 0.2, 0.8], // Data dummy rata-rata
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderColor: '#000',
                borderWidth: 3,
                pointBackgroundColor: '#FF6B6B',
                pointBorderColor: '#000',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                r: {
                    angleLines: { color: '#000' },
                    grid: { color: '#000' },
                    pointLabels: { 
                        font: { family: 'Space Grotesk', weight: 'bold', size: 12 },
                        color: '#000'
                    },
                    ticks: { display: false },
                    suggestMin: 0,
                    suggestMax: 1
                }
            }
        }
    });
});