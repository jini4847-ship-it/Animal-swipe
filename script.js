const animalList = document.getElementById("animalList");

animals.forEach((animal) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="emoji" style="font-size:70px;text-align:center;margin-top:20px;">
      ${animal.emoji}
    </div>
    <div class="info">
      <div class="name">${animal.name}</div>
    </div>
  `;

  card.onclick = () => {
    location.href = `gallery.html?id=${animal.id}`;
  };

  animalList.appendChild(card);
});