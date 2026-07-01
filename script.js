const swiper = new Swiper(".swiper", {
  loop: false,
  speed: 300,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 사진 클릭하면 동물 이름 읽기
document.querySelectorAll(".swiper-slide").forEach((slide) => {
  slide.addEventListener("click", () => {
    const text = slide.querySelector("h2").textContent.replace(/^[^\w가-힣]+\s*/, "");

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "ko-KR";
    speech.rate = 0.9;

    speechSynthesis.cancel();
    speechSynthesis.speak(speech);
  });
});