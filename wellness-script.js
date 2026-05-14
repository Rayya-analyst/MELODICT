document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CONFIGURATION ---
    const moodConfigs = {
        'Energetic': { title: 'Cyber-Focus: Phonk', color: '#1DB954', insight: 'High Tempo cocok untuk boost energi!' },
        'Mellow': { title: 'Coffee Shop Lo-fi', color: '#FBE36A', insight: 'Tempo rendah membantu relaksasi kreatif.' },
        'Focus': { title: 'Deep Work: Synthwave', color: '#BB86FC', insight: 'Ritme konstan menjaga konsentrasi.' },
        'Tired': { title: 'Rest & Reset: Nature', color: '#FF6B6B', insight: 'AI menyarankan musik ambient untuk recovery.' }
    };

    // --- 2. MOOD PICKER LOGIC ---
    const moodBtns = document.querySelectorAll('.mood-btn');
    let selectedMood = "Focus"; // Default

    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            moodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedMood = btn.dataset.mood;
            console.log("Mood selected:", selectedMood);
        });
    });

    // --- 3. CHART SETUP (Chart.js) ---
    const ctx = document.getElementById('correlationChart').getContext('2d');
    const correlationChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Habit vs BPM',
                data: [], 
                backgroundColor: '#000',
                pointRadius: 8,
                showLine: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: 'BPM' }, min: 60, max: 200 },
                y: { title: { display: true, text: 'Habit Score %' }, min: 0, max: 100 }
            }
        }
    });

    // --- 4. CORE ANALYTICS ENGINE ---
    const form = document.getElementById('wellness-form');
    const checks = document.querySelectorAll('.habit-check');
    const scoreText = document.getElementById('score-text');
    const scoreFill = document.getElementById('score-fill');

    function finalizeAnalysis(score, mood, bpm) {
        const insight = document.getElementById('ai-insight');
        const title = document.getElementById('suggested-title');
        const art = document.getElementById('playlist-art');
        const config = moodConfigs[mood];

        // Update Wellness UI
        if (scoreText) scoreText.innerText = `${score}%`;
        if (scoreFill) scoreFill.style.width = `${score}%`;

        // Update Recommendation Box
        if (insight) insight.innerText = `Berdasarkan Mood ${mood}: ${config.insight}`;
        if (title) title.innerText = config.title;
        if (art) art.style.backgroundColor = config.color;

        // Update Chart Local
        correlationChart.data.datasets[0].data.push({ x: bpm, y: score });
        correlationChart.update();
    }

    // --- 5. SUBMIT HANDLER (The "Data Source" for Dashboard) ---
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // A. Hitung Score Habit
            const total = checks.length;
            const checked = Array.from(checks).filter(c => c.checked).length;
            const score = Math.round((checked / total) * 100);
            
            // B. Ambil BPM Input
            const bpmInput = document.getElementById('bpm-input');
            const bpm = parseInt(bpmInput.value) || 120;
            
            // C. Finalisasi UI Wellness
            finalizeAnalysis(score, selectedMood, bpm);

            // D. SIMPAN DATA UNTUK DASHBOARD
            // Gunakan kunci 'melodict_last_log' agar dibaca oleh Data Intelligence di Dashboard
            const logData = {
                mood: selectedMood,
                score: score,
                bpm: bpm,
                timestamp: new Date().toLocaleTimeString()
            };
            
            localStorage.setItem('melodict_last_log', JSON.stringify(logData));
            
            alert("Metrics Logged! Dashboard Intelligence telah diperbarui.");
            console.log("Data Sent to Dashboard:", logData);
        });
    }
});