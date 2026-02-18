import type { GiphyRandomResponse } from "../data/giphy.response";

// Uso de la API Key
const API_KEY = "";

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`,
);

// Función para insertar la imagen en el DOM
const insertImage = (url: string) => {
    const imgElement = document.createElement("img");
    imgElement.src = url;
    document.body.append(imgElement);
};

// Manejo de la respuesta de la API
myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imgUrl = data.images.original.url;
        insertImage(imgUrl);
    })
    .catch((error) => {
        console.error("Error fetching the GIF:", error);
    });
