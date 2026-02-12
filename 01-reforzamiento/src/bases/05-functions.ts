// Establecer tipo de retorno y tipo de parámetro para la función
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// función flecha con tipos de parámetros y retorno
const myArrowFunction = (num: number): number => {
    return num * 2;
};

/*
Actividad: Transformar la funcion 'getUser' a una función flecha con tipos de parámetros y retorno. 

function getUser() {
    return {
        uid: "123",
        username: "alemr",
    };
}
*/

const getUser = (): { uid: string; username: string } => {
    return {
        uid: "123",
        username: "alemr",
    };
};

const greeting = greet("Alejandro");
const result = myArrowFunction(5);

// Salidas
console.log(greeting);
console.log(result);
console.log(getUser());
