// Dictionnaire d’actions pour le Dashboard
const actions = {
    "mode sombre": () => { document.body.style.backgroundColor = "#1e1e2f"; document.body.style.color = "#fff"; },
    "mode clair": () => { document.body.style.backgroundColor = "#f4f4f9"; document.body.style.color = "#000"; },
    "agrandir sidebar": () => { document.querySelector(".sidebar").style.width = "300px"; document.querySelector(".main").style.marginLeft = "320px"; },
    "réduire sidebar": () => { document.querySelector(".sidebar").style.width = "150px"; document.querySelector(".main").style.marginLeft = "170px"; },
    "masquer recherche": () => { document.querySelector(".navbar").style.display = "none"; },
    "afficher recherche": () => { document.querySelector(".navbar").style.display = "flex"; },
    "ajouter bouton météo": () => {
        let quickBtn = document.createElement("button");
        quickBtn.innerText = "☁️ Météo rapide";
        quickBtn.onclick = () => window.location.href="/meteo";
        document.querySelector(".navbar").appendChild(quickBtn);
    },
    "changer police arial": () => { document.body.style.fontFamily = "Arial, sans-serif"; },
    "changer police courier": () => { document.body.style.fontFamily = "Courier New, monospace"; },
    "texte petit": () => { document.body.style.fontSize = "12px"; },
    "texte moyen": () => { document.body.style.fontSize = "16px"; },
    "texte grand": () => { document.body.style.fontSize = "20px"; },
    "réinitialiser paramètres": () => {
        document.body.style.backgroundColor = "#1e1e2f";
        document.body.style.color = "#fff";
        document.body.style.fontFamily = "Arial, sans-serif";
        document.body.style.fontSize = "16px";
        document.querySelector(".sidebar").style.width = "220px";
        document.querySelector(".main").style.marginLeft = "240px";
        document.querySelector(".navbar").style.display = "flex";
    }
};
