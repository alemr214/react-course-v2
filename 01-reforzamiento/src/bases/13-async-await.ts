import type { GiphyRandomResponse } from "../data/giphy.response";

// Uso de la API Key
const API_KEY = "";

// Función para insertar la imagen en el DOM
const insertImage = (url: string) => {
    const imgElement = document.createElement("img");
    imgElement.src = url;
    document.body.append(imgElement);
};

const getRandomGif = async () => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`,
    );

    const { data }: GiphyRandomResponse = await response.json();

    return data.images.original.url;
};

getRandomGif()
    .then((gifUrl) => {
        insertImage(gifUrl);
    })
    .catch((error) => {
        console.error("Error fetching the GIF:", error);
    });
