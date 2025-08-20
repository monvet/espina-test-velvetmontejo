// Log en consola al hacer click en el icono (solo un pequeño guiño, literalmente)
const smiley = document.querySelector(".smiley-icon");
smiley.addEventListener("click", ()=>{
    console.log("Hola;)");
});

// Animación de highlight al hacer hover en las tarjetas
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('highlight'));
    card.addEventListener('mouseleave', () => card.classList.remove('highlight'));
})

// Animación de giro al hacer click en las tarjetas
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.add("spin");

    // Quita la clase para poder repetir la animacion
        card.addEventListener("animationend", () => {
        card.classList.remove("spin");
        }, { once: true });
    });
});