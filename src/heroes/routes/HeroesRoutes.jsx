import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "../../interface/components/NavBar/Navbar"
import MarvelPage from "../pages/MarvelPage"
import DcPage from "../pages/DcPage"
import HeroePage from "../pages/HeroePage/HeroePage"
import ListSearch from "../pages/ListSearch/ListSearch"

const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="contenedor">
                <Routes>

                    <Route path='marvel-page' element={<MarvelPage />} />
                    <Route path='dc-page' element={<DcPage />} />

                    <Route path="heroe/:heroeId" element={<HeroePage />} />
                    <Route path="heroe/search" element={<ListSearch />}/>
                    {/* Ruta principal */}
                    <Route path='/' element={<Navigate to={"/marvel-page"} />} />
                </Routes>
            </div>
        </>
    )
}

export default HeroesRoutes