import "./HeroeCard.css"
import { Link } from "react-router-dom";
const HeroeCard = (heroes) => {
    const { id, superhero, characters } = heroes;
    const imageHeroes = `/heroes/${id}.jpg`
    return (

        <div className="card">
            <img src={imageHeroes} alt={superhero} className="card-img" />
            <div className="card-body text-center">
                <h5>{characters}</h5>
                <p>{superhero}</p>
                <Link
                    to={`/heroe/${id}`}
                >
                    Informacion
                </Link>
            </div>
        </div>
    )
}

export default HeroeCard