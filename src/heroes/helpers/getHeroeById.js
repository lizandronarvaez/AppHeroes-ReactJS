import { heroes } from "../data/HeroesList"

const getHeroeById = (id) => {

    return heroes.find(heroe=> heroe.id === id);
}

export default getHeroeById