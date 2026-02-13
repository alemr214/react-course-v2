/*
    ========== Tarea 10: Importaciones y Exportaciones ==========

    1. Crear la funcion getHeroesByOwner que retorne un Hero[]
    2. Filtrar los heroes por:
        @param owner - "DC" o "Marvel"
        @return Array de heroes que correspondan al owner
*/

import { heroes, type Hero, type Owner } from "../data/heroes.data";

const getHeroesByOwner = (owner: Owner): Hero[] => {
    return heroes.filter((hero) => hero.owner === owner);
};

console.log(getHeroesByOwner("Marvel"));
