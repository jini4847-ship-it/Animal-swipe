const params = new URLSearchParams(location.search);
const id = params.get("id");

const animal = animals.find(a => a.id === id);

document.getElementById("title").textContent =
`${animal.emoji} ${animal.name}`;

const gallery = document.getElementById("gallery");

animal.images.forEach((image)=>{

    gallery.innerHTML += `
        <div class="swiper-slide">
            <img src="${image}">
        </div>
    `;

});

new Swiper(".swiper",{

    slidesPerView:1,

    pagination:{
        el:".swiper-pagination"
    }

});

document.getElementById("backBtn").onclick=()=>{

    history.back();

}