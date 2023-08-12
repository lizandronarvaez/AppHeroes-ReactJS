
import { heroes } from "../data/HeroesList"

const getHeroesByName = (name = "") => {
    if (name.length === 0) {
        return [];
    }
    return heroes.find(heroe => heroe.superhero.toLowerCase().trim().replace(/ /g, "").includes(name.replace(/ /g, "")))
}

export default getHeroesByName