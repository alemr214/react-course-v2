// Los arreglos pueden contener múltiples tipos de datos utilizando uniones de tipos.
const myArray: (number | string)[] = [10, 20, 30, 40, 50, "60"];

// Para clonar un arreglo, puedes usar el método `structuredClone` o el operador de propagación (`...`).
const cloneArray = structuredClone(myArray);
// const cloneArray = [...myArray, 80, 90];

console.log(myArray);
console.log(cloneArray);
