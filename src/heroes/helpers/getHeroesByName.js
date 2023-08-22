
import { heroes } from "../data/HeroesList"

const getHeroesByName = (name = "") => {
    if (name.length === 0) {
        return [];
    }
    return heroes.find(heroe =>
        heroe.superhero
            .normalize("NFD")
            .toLowerCase()
            .trim()
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
                name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            ))
}

export default getHeroesByName