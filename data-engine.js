const dummyData = [
  {
    "track_name": "Deep Focus Beat",
    "artist": "Lofi Girl",
    "audio_features": { "valence": 0.45, "energy": 0.20, "danceability": 0.30, "acousticness": 0.85, "tempo": 80 }
  },
  {
    "track_name": "Summer High",
    "artist": "Pop Star",
    "audio_features": { "valence": 0.85, "energy": 0.90, "danceability": 0.75, "acousticness": 0.10, "tempo": 128 }
  }
];

// Fungsi ini yang kamu panggil nanti di dashboard
export const getWellnessInsights = () => {
    return dummyData.map(track => {
        const score = (track.audio_features.valence * 50) + (track.audio_features.energy * 50);
        return {
            ...track,
            wellnessScore: score.toFixed(0)
        };
    });
};