document.addEventListener('DOMContentLoaded', () => {
    let timerInterval;

    function updateUI() {
        // Ambil status dari LocalStorage
        const isConnected = localStorage.getItem('spotifyConnected') === 'true';
        const sessionStatus = localStorage.getItem('sessionStatus') || 'idle';

        // Elements UI
        const stateDisconnected = document.getElementById('state-disconnected');
        const stateConnected = document.getElementById('state-connected');
        const timerContainer = document.getElementById('active-timer-container');

        // Buttons
        const btnStart = document.getElementById('btn-start-session');
        const btnPause = document.getElementById('btn-pause-session');
        const btnResume = document.getElementById('btn-resume-session');
        const btnEnd = document.getElementById('btn-end-session');

        // 1. LOGIKA KONEKSI & TOMBOL (Ini yang tadi bikin macet)
        if (isConnected) {
            stateDisconnected?.classList.add('d-none');
            stateConnected?.classList.remove('d-none');

            // Reset semua tombol dulu
            [btnStart, btnPause, btnResume, btnEnd].forEach(btn => btn?.classList.add('d-none'));

            // Tampilkan tombol sesuai status sesi
            if (sessionStatus === 'idle') {
                btnStart?.classList.remove('d-none');
                if (timerContainer) timerContainer.classList.add('d-none');
                stopLiveTimer();
            } else if (sessionStatus === 'active') {
                btnPause?.classList.remove('d-none');
                btnEnd?.classList.remove('d-none');
                if (timerContainer) timerContainer.classList.remove('d-none');
                startLiveTimer();
            } else if (sessionStatus === 'paused') {
                btnResume?.classList.remove('d-none');
                btnEnd?.classList.remove('d-none');
                if (timerContainer) timerContainer.classList.remove('d-none');
                stopLiveTimer();
            }
        } else {
            stateDisconnected?.classList.remove('d-none');
            stateConnected?.classList.add('d-none');
        }

        // 2. DATA INTELLIGENCE & STATS (Single Source of Truth)
        const lastHabitData = JSON.parse(localStorage.getItem('melodict_last_log'));
        const lastSession = JSON.parse(localStorage.getItem('melodict_session_data'));
        const insightBox = document.getElementById('ai-insight-text');

        if (lastHabitData) {
            // Update Insight Box
            if (insightBox) {
                insightBox.innerHTML = `
                    <div class="fade-in">
                        <span class="badge bg-primary mb-2">LAST ANALYSIS</span><br>
                        Focus achieved <b>${lastHabitData.score}%</b> with <b>${lastHabitData.mood}</b> vibe.
                    </div>`;
            }
            // Update Bento Cards
            if(document.getElementById('focus-cons')) document.getElementById('focus-cons').innerText = `${lastHabitData.score}%`;
            if(document.getElementById('opt-bpm')) document.getElementById('opt-bpm').innerText = lastHabitData.bpm;
            if(document.getElementById('last-bpm-stat')) document.getElementById('last-bpm-stat').innerText = `${lastHabitData.bpm} BPM`;
        }

        if (lastSession) {
            // Update Hero Stats
            if(document.getElementById('last-session-time')) 
                document.getElementById('last-session-time').innerText = `${lastSession.duration} MIN`;
            
            const welcomeMsg = document.querySelector('#state-connected p');
            if(welcomeMsg) welcomeMsg.innerHTML = `Your last session lasted <b>${lastSession.duration} minutes</b>. Ready for a new flow?`;
        }
    }

    // --- LOGIKA STOPWATCH ---
    function startLiveTimer() {
        if (timerInterval) return;
        timerInterval = setInterval(() => {
            const startTime = localStorage.getItem('sessionStartTime');
            if (!startTime) return;

            const now = new Date().getTime();
            const diffMs = now - parseInt(startTime);
            const seconds = Math.floor((diffMs / 1000) % 60);
            const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
            const hours = Math.floor(diffMs / (1000 * 60 * 60));

            const display = (hours > 0 ? String(hours).padStart(2, '0') + ":" : "") + 
                            String(minutes).padStart(2, '0') + ":" + 
                            String(seconds).padStart(2, '0');

            const timerElem = document.getElementById('live-timer');
            if (timerElem) timerElem.innerText = display;
        }, 1000);
    }

    function stopLiveTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    // --- EVENT HANDLERS ---
    document.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (!target) return;
        const id = target.id;

        if (id === 'btn-connect') {
            localStorage.setItem('spotifyConnected', 'true');
            updateUI();
        } 
        else if (id === 'btn-start-session') {
            localStorage.setItem('sessionStartTime', new Date().getTime());
            localStorage.setItem('sessionStatus', 'active');
            updateUI();
        } 
        else if (id === 'btn-pause-session') {
            localStorage.setItem('sessionStatus', 'paused');
            updateUI();
        } 
        else if (id === 'btn-resume-session') {
            localStorage.setItem('sessionStatus', 'active');
            updateUI();
        } 
        else if (id === 'btn-end-session') {
            if (confirm("End and save session?")) {
                const endTime = new Date().getTime();
                const startTime = localStorage.getItem('sessionStartTime');
                const diffMin = startTime ? Math.floor((endTime - parseInt(startTime)) / 60000) : 0;

                localStorage.setItem('melodict_session_data', JSON.stringify({ duration: diffMin }));
                localStorage.setItem('sessionStatus', 'idle');
                localStorage.removeItem('sessionStartTime');
                stopLiveTimer();
                updateUI();
            }
        }
    });

    // Inisialisasi awal
    updateUI();
});