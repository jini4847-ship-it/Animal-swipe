const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const animal = animals.find(a => a.id === id);

document.getElementById("title").textContent =
`${animal.emoji} ${animal.name}`;

document.getElementById("backBtn").onclick = () => {
    history.back();
};

async function loadImages(retry = 0){

    const gallery = document.getElementById("gallery");

    gallery.innerHTML =
    `<div style="font-size:28px;padding:40px;text-align:center;">
    📸 사진 불러오는 중...
    </div>`;

    const keywords = [
    ...animal.searches,
    `${animal.name} cartoon`,
    `${animal.name} illustration`,
    `${animal.name} cute`,
    `${animal.name} baby`
];

const search =
keywords[Math.floor(Math.random() * keywords.length)];

    const randomPage = Math.floor(Math.random() * 50) + 1;

const url =
`https://api.pexels.com/v1/search?query=${encodeURIComponent(search)}&per_page=15&page=${randomPage}`;

    try{

        const response = await fetch(url,{
            headers:{
                Authorization:PEXELS_API_KEY
            }
        });

        const data = await response.json();

        if(!data.photos || data.photos.length===0){

            if(retry<3){
               