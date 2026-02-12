const person = {
    name: "Alice",
    age: 30,
    city: "New York",
};

// Desestructuración de objetos para extraer propiedades
// El orden de destructuración en objetos no importa, en arreglos si
const { name, age, city } = person;

console.log({ name, age, city });
