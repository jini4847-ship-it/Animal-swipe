const animalList = document.getElementById("animalList");

animals.forEach((animal) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${animal.images[0]}" alt="${animal.name}">
    <div class="info">
      <div class="emoji">${animal.emoji}</div>
      <div class="name">${animal.name}</div>
    </div>
  `;

  card.addEventListener("click", () => {
    location.href = `gallery.html?id=${animal.id}`;
});

  animalList.appendChild(card);
});