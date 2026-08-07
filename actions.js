// Dictionnaire d’actions pour le Dashboard
const actions = {
    // Thèmes
    "mode sombre": () => { document.body.style.backgroundColor = "#1e1e2f"; document.body.style.color = "#fff"; },
    "mode clair": () => { document.body.style.backgroundColor = "#f4f4f9"; document.body.style.color = "#000"; },

    // Sidebar
    "agrandir sidebar": () => { document.querySelector(".sidebar").style.width = "300px"; document.querySelector(".main").style.marginLeft = "320px"; },
    "réduire sidebar": () => { document.querySelector(".sidebar").style.width = "150px"; document.querySelector(".main").style.marginLeft = "170px"; },

    // Barre de recherche
    "masquer recherche": () => { document.querySelector(".navbar").style.display = "none"; },
    "afficher recherche": () => { document.querySelector(".navbar").style.display = "flex"; },

    // Bouton rapide météo
    "ajouter bouton météo": () => {
        let quickBtn = document.createElement("button");
        quickBtn.innerText = "☁️ Météo rapide";
        quickBtn.onclick = () => {
            incrementStats("Météo");
            window.location.href="/meteo";
        };
        document.querySelector(".navbar").appendChild(quickBtn);
    },

    // Police et taille du texte
    "changer police arial": () => { document.body.style.fontFamily = "Arial, sans-serif"; },
    "changer police courier": () => { document.body.style.fontFamily = "Courier New, monospace"; },
    "texte petit": () => { document.body.style.fontSize = "12px"; },
    "texte moyen": () => { document.body.style.fontSize = "16px"; },
    "texte grand": () => { document.body.style.fontSize = "20px"; },

    // Réinitialisation complète
    "réinitialiser paramètres": () => {
        document.body.style.backgroundColor = "#1e1e2f";
        document.body.style.color = "#fff";
        document.body.style.fontFamily = "Arial, sans-serif";
        document.body.style.fontSize = "16px";
        document.querySelector(".sidebar").style.width = "220px";
        document.querySelector(".main").style.marginLeft = "240px";
        document.querySelector(".navbar").style.display = "flex";
        document.getElementById("worldClock").style.display = "block";
        document.getElementById("weatherWidget").style.display = "block";
        document.getElementById("statsModule").style.display = "block";
    },

    // Nouveaux modules : Horloge
    "afficher horloge": () => { document.getElementById("worldClock").style.display = "block"; },
    "masquer horloge": () => { document.getElementById("worldClock").style.display = "none"; },

    // Nouveaux modules : Météo
    "afficher météo": () => { document.getElementById("weatherWidget").style.display = "block"; },
    "masquer météo": () => { document.getElementById("weatherWidget").style.display = "none"; },

    // Nouveaux modules : Statistiques
    "afficher statistiques": () => { document.getElementById("statsModule").style.display = "block"; },
    "masquer statistiques": () => { document.getElementById("statsModule").style.display = "none"; }
};

// --- Gestion des statistiques dynamiques ---
let statsCounters = {
    "Météo": 0,
    "News": 0,
    "Galerie": 0,
    "Jeux": 0,
    "Notes": 0
};

// Fonction pour incrémenter un compteur
function incrementStats(moduleName) {
    if(statsCounters[moduleName] !== undefined) {
        statsCounters[moduleName]++;
        updateStatsChart();
    }
}

// Fonction pour mettre à jour le graphique Chart.js
function updateStatsChart() {
    if(window.statsChart) {
        window.statsChart.data.datasets[0].data = Object.values(statsCounters);
        window.statsChart.update();
    }
}
