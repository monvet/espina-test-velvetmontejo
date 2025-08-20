const smiley = document.querySelector(".smiley-icon");
smiley.addEventListener("mouseenter", ()=>{
    console.log("Hola;)");
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('highlight'));
    card.addEventListener('mouseleave', () => card.classList.remove('highlight'));
})
