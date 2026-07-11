const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const animal = animals.find(a => a.id === id);

if (!animal) {
    document.body.innerHTML = "<h2>동물을 찾을 수 없습니다.</h2>";
    throw new Error("Animal not found");
}

document.getElementById("title").textContent =
`${animal.emoji} ${animal.name}`;

document.getElementById("speakBtn").onclick = () => {

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(animal.name);

    speech.lang = "ko-KR";

    speech.rate = 0.8;

    speech.pitch = 1.1;

    speechSynthesis.speak(speech);

};

document.getElementById("backBtn").onclick = () => {
    history.back();
};

async function loadImages(retry = 0) {

    const gallery = document.getElementById("gallery");

    gallery.innerHTML = `
    <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        height:70vh;
        font-size:28px;">
        📸 사진 불러오는 중...
    </div>`;

    const search =
        animal.searches[Math.floor(Math.random() * animal.searches.length)];

    const randomPage = Math.floor(Math.random() * 30) + 1;

    const url =
`https://api.pexels.com/v1/search?query=${encodeURIComponent(search)}&per_page=10&page=${randomPage}`;

    try {

        const response = await fetch(url, {
            headers: {
                Authorization: PEXELS_API_KEY
            }
        });

        if (!response.ok) {
            throw new Error("API Error : " + response.status);
        }

        const data = await response.json();

        if (!data.photos || data.photos.length === 0) {

            if (retry < 3) {
                return loadImages(retry + 1);
            }

            gallery.innerHTML =
                "<h2>사진을 찾지 못했어요 😢</h2>";

            return;
        }

        gallery.innerHTML = "";
        data.photos.forEach(photo => {

            const slide = document.createElement("div");
            slide.className = "swiper-slide";

            slide.innerHTML = `
                <img src="${photo.src.large2x}"
                     alt="${animal.name}"
                     loading="lazy">
            `;

            gallery.appendChild(slide);

        });

        new Swiper(".swiper", {
            loop: true,
            pagination: {
                el: ".swiper-pagination"
            }
        });

    } catch (e) {

        console.error(e);

        gallery.innerHTML = `
            <div style="
                text-align:center;
                padding:40px;
                font-size:24px;">
                😢 사진을 불러오지 못했습니다.
                <br><br>
                <button onclick="loadImages()">
                    다시 시도
                </button>
            </div>
        `;

    }

}

loadImages();