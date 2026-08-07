// --- Gestion des statistiques dynamiques avec persistance ---
let statsCounters = JSON.parse(localStorage.getItem("statsCounters")) || {
    "Météo": 0,
    "News": 0,
    "Galerie": 0,
    "Jeux": 0,
    "Notes": 0
};

function incrementStats(moduleName) {
    if(statsCounters[moduleName] !== undefined) {
        statsCounters[moduleName]++;
        localStorage.setItem("statsCounters", JSON.stringify(statsCounters)); // Sauvegarde
        updateStatsChart();
    }
}

function updateStatsChart() {
    if(window.statsChart) {
        window.statsChart.data.datasets[0].data = Object.values(statsCounters);
        window.statsChart.update();
    }
}
