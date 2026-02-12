// ===== Chequeo de actualización =====
(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

// ===== Mensajes de No =====
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

// ===== Stickers disponibles =====
const stickers = [
    "gatito.gif",
    "gatito2.gif",
    "gatito3.gif",
    "gatito4.gif",
    "gatito5.gif",
    "gatito6.gif"
];

// ===== Función al hacer click en "No" =====
function handleNoClick() {
    // Cambia el mensaje del botón
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Aumenta tamaño del botón Yes
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Cambia el sticker principal a uno aleatorio
    const sticker = document.getElementById("stickerPrincipal");
    let nuevo;
    do {
        nuevo = stickers[Math.floor(Math.random() * stickers.length)];
    } while (nuevo === sticker.src.split("/").pop()); // evita repetir el mismo
    sticker.src = nuevo;
}

// ===== Función al hacer click en "Yes" =====
function handleYesClick() {
    window.location.href = "yes_page.html";
}
