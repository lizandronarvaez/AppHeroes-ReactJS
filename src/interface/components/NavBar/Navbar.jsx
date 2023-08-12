import { Link, NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"
import SearchHeroe from "../../../heroes/pages/SearchHeroe/SearchHeroe";
import { useContext } from "react";
import AuthContext from "../../../auth/context/AuthContext";
const Navbar = () => {
    const navigate = useNavigate();
    const { logged, user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate("/login", {
            replace: true
        })
    }
    return (
        <nav className="navegacion">

            <Link
                className="navegacion_titulo"
                to="/"
            >
                AppHeroes
            </Link>
            {
                logged ? (
                    <>
                        <div className="enlaces">

                            <NavLink
                                className={({ isActive }) => ` ${isActive ? "active" : ""}`}
                                to="/marvel-page"
                            >
                                Marvel
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => ` ${isActive ? "active" : ""}`}
                                to="/dc-page"
                            >
                                DC
                            </NavLink>
                        </div>
                        <SearchHeroe />
                        <div className="logout">
                            <span>Bienvenido {user}</span>
                            <button
                                to="/login"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </>
                ) : null
            }

        </nav>
    )
}

export default Navbar