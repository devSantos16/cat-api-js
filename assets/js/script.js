const API_URL = "https://api.thecatapi.com/v1/images/search";
const img = document.querySelector(".img-container");
const button = document.querySelector(".button-container");

async function getImageUrl() {

    try {
        // chamada da url via fetch
        const response = await fetch(API_URL);
        // criando uma database com json da api
        const data = await response.json();
        // destruturação do objecto
        const { url } = data[0];
        // retornando url
        return url;
    }
    catch(error){
        console.log(error.message);
    }
}

const loadImg = async () => {
    img.src = await getImageUrl();
}

button.addEventListener("click", () => {
    loadImg();
});