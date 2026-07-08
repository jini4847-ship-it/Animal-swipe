const animalList = document.getElementById("animalList");

console.log("animals =", animals);

animals.forEach((animal) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="emoji">${animal.emoji}</div>
    <div class="info">
      <div class="name">${animal.name}</div>
    </div>
  `;

  card.onclick = () => {
    location.href = `gallery.html?id=${animal.id}`;
  };

  animalList.appendChild(card);
});

document.getElementById("randomBtn").onclick = () => {
  const random = animals[Math.floor(Math.random() * animals.length)];
  location.href = `gallery.html?id=${random.id}`;
};