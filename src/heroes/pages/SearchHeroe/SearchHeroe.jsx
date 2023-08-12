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
        if (heroe.trim().length <= 1) return;

        navigate(`heroe/search?q=${heroe}`)
        setFormData({ heroe: "" })
    }
    return (
        <form className="form-busqueda" onSubmit={handleSubmitSearch}>
            <input
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