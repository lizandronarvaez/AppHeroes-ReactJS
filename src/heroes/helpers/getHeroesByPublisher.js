import { heroes } from "../data/HeroesList"

const getHeroesByPublisher = (publisher) => {

    const publisherValid = ["DC Comics", "Marvel Comics"];

    if (publisherValid.includes(publisher)) {
        return heroes.filter(heroe => heroe.publisher === publisher)
    }

    throw new Error(`${publisher} es un dato valido`)
}

export default getHeroesByPublisher