// Uso de promesas en Ty peScript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("¡Promesa resuelta!");
        reject("¡Promesa rechazada!");
    }, 2000);
});

// Se resuelve, se rechaza o se maneja el error de la promesa
myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
