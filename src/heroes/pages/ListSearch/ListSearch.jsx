// import HeroeCard from "../components/HeroeCard/HeroeCard"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string";
import HeroeCard from "../../components/HeroeCard/HeroeCard";
import getHeroesByName from "../../helpers/getHeroesByName";
import "./ListSearch.css"
import { useEffect } from "react";
const ListSearch = () => {
    const navigate = useNavigate()
    const location = useLocation();
    // Query del valor de la busqueda
    const { q = "" } = queryString.parse(location.search);
    // Resultado de la busqueda del query
    const heroe = getHeroesByName(q);
    // Volver atras
    const handleBackSearch = () => navigate(-1)

    useEffect(() => {
        q === "" ? navigate("/") : null
    }, [navigate, q])
    return (

        heroe ? (
            <div className="heroe-is-found">
                <HeroeCard
                    key={heroe.id}
                    {...heroe}
                />
            </div>

        ) : (
            <div className="heroe-not-found">
                <h3>No existe el personaje con el nombre <span>{q}</span></h3>
                <button
                    onClick={handleBackSearch}
                >
                    Volver
                </button>
            </div>
        )
    )
}

export default ListSearch