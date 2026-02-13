import { heroes, type Hero } from "../data/heroes.data";

// Uso de exportaciones para compartir funciones entre archivos
const getHeroById = (id: number): Hero | undefined => {
    return heroes.find((hero) => hero.id === id);
};
