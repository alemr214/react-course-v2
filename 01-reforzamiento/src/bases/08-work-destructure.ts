/*
    ======== Tarea ========
    1. La funcion debe de llamarse useState
    2. Debe de retornar un arreglo con 2 valores
        - El primer valor un string (valor inicial)
        - Segundo valor una funcion de flecha que:
            - Recibe un argumento de tipo string
            - No retorna nada (void)
*/
const useState = (v1: string) => {
    return [
        v1,
        (s: string) => {
            console.log(s);
        },
    ] as const;
};

const [value, setValue] = useState("Initial Value");

console.log(value);
setValue("New Value");
