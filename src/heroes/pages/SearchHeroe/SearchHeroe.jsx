import "./SearchHeroe.css"
import useForm from "../../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string";
const SearchHeroe = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { q = "" } = queryString.parse(location.search);

    const { heroe, handleInputChange, setFormData } = useForm({ heroe: q })

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        const dataInputClean = heroe.toLowerCase().trim();
        if (dataInputClean.length <= 1) return;

        navigate(`heroe/search?q=${dataInputClean}`)
        setFormData({ heroe: "" })
    }
    return (
        <form className="form-busqueda" onSubmit={handleSubmitSearch} aria-label="buscar-personaje">
            <input
                aria-label="valor-personaje"
                type="text"
                name="heroe"
                placeholder="Buscar un personaje"
                onChange={handleInputChange}
                autoComplete="off"
                value={heroe}
            />
        </form>
    )
}

export default SearchHeroe