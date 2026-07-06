const animalList = document.getElementById("animalList");

animals.forEach(async (animal) => {

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
      <div class="emoji">${animal.emoji}</div>
      <img class="thumb" src="" alt="${animal.name}">
      <div class="info">
          <div class="name">${animal.name}</div>
      </div>
  `;

  card.onclick = () => {
      location.href=`gallery.html?id=${animal.id}`;
  };

  animalList.appendChild(card);

  try{

      const search =
      animal.searches[Math.floor(Math.random()*animal.searches.length)];

      const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(search)}&per_page=1`,
      {
          headers:{
              Authorization:PEXELS_API_KEY
          }
      });

      const data = await res.json();

      if(data.photos.length>0){

          card.querySelector(".thumb").src =
          data.photos[0].src.medium;

      }

  }catch(e){

      console.log(e);

  }

});