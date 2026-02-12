const names: string[] = ["Alice", "Bob", "Charlie"];

// Desestructuración de arreglos para extraer elementos
const [first, second, third] = names;
// const [, , third] = names; // Si solo quieres el tercer elemento

console.log({ first, second, third });
