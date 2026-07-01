const animalList = document.getElementById("animalList");

animals.forEach((animal) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${animal.image}" alt="${animal.name}">
    <div class="info">
      <div class="emoji">${animal.emoji}</div>
      <div class="name">${animal.name}</div>
    </div>
  `;

  card.addEventListener("click", () => {
    alert(`${animal.name} 갤러리는 다음 단계에서 만들어요! 🐾`);
  });

  animalList.appendChild(card);
});