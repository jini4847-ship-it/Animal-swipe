let index = 0;
const totalSlides = 4;

let startX = 0;
let isMoving = false;

const slider = document.getElementById("slider");

document.addEventListener("touchstart", (e) => {
    if (isMoving) return;
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
    if (isMoving) return;

    const endX = e.changedTouches[0].clientX;
    const distance = startX - endX;

    if (Math.abs(distance) < 80) return;

    if (distance > 0 && index < totalSlides - 1) {
        index++;
    } else if (distance < 0 && index > 0) {
        index--;
    }

    isMoving = true;

    slider.style.transform = `translateX(-${index * 100}vw)`;

    setTimeout(() => {
        isMoving = false;
    }, 350);
});