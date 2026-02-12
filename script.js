// 🎵 Música inicia al primer click
document.addEventListener('click', function() {
    const audio = document.getElementById('musica');
    if (audio.paused) audio.play();
}, { once: true });

// 📸 Fotos alrededor aparecen una por una cada 1.5s
document.addEventListener("DOMContentLoaded", function () {
    const fotos = document.querySelectorAll(".foto");
    let index = 0;

    // Oculta todas las fotos al inicio
    fotos.forEach(f => f.style.opacity = "0");

    function mostrarSiguiente() {
        fotos.forEach(f => f.style.opacity = "0");
        fotos[index].style.opacity = "1";
        index = (index + 1) % fotos.length;
    }

    mostrarSiguiente();
    setInterval(mostrarSiguiente, 1500);
});

// 🐾 Stickers disponibles para el principal (al click en No)
const stickers = [
    "gatitos.gif",
    "gatitos2.gif",
    "gatitos3.gif",
    "gatitos4.gif"
];

// 💬 Mensajes dinámicos para botón No
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

// ===== Función para botón No =====
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Cambia mensaje del botón No
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Aumenta tamaño del botón Yes
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Cambia sticker principal a uno aleatorio
    const sticker = document.getElementById("stickerPrincipal");
    let nuevo;
    do {
        nuevo = stickers[Math.floor(Math.random() * stickers.length)];
    } while (nuevo === sticker.src.split("/").pop()); // evita repetir
    sticker.src = nuevo;
}

// ===== Función para botón Yes =====
function handleYesClick() {
    window.location.href = "yes_page.html";
}

}
