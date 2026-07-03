const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const animal = animals.find(a => a.id === id);

document.getElementById("title").textContent =
`${animal.emoji} ${animal.name}`;

document.getElementById("backBtn").onclick = () => {
    history.back();
};

async function loadImages() {

    const randomPage = Math.floor(Math.random() * 30) + 1;

const url =
`https://api.pexels.com/v1/search?query=${encodeURIComponent(animal.search)}&per_page=20&page=${randomPage}`;

    const response = await fetch(url,{
        headers:{
            Authorization:PEXELS_API_KEY
        }
    });

    const data = await response.json();

    const gallery = document.getElementById("gallery");

    data.photos.forEach(photo=>{

        gallery.innerHTML += `
            <div class="swiper-slide">
                <img src="${photo.src.large}">
            </div>
        `;

    });

    new Swiper(".swiper",{
        slidesPerView:1,
        pagination:{
            el:".swiper-pagination"
        }
    });

}

loadImages();