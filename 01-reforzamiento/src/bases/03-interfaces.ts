interface Person {
    nombre: string;
    edad: number;
    mascota: Mascota;
}

interface Mascota {
    nombre: string;
    edad: string;
    tipo: string;
}

const persona: Person = {
    nombre: "Alejandro",
    edad: 30,
    mascota: {
        nombre: "Firulais",
        edad: "5 años",
        tipo: "Perro",
    },
};

console.log(persona);
