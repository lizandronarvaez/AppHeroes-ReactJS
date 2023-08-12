import { Link, NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"
import SearchHeroe from "../../../heroes/pages/SearchHeroe/SearchHeroe";
import { useContext } from "react";
import AuthContext from "../../../auth/context/AuthContext";
import Swal from "sweetalert2/dist/sweetalert2.all";
const Navbar = () => {
    const navigate = useNavigate();
    const { logged, user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        Swal.fire({
            title: 'Cerrar Sesion?',
            text: "Gracias por visitar la pagina!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, continuar',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
                navigate("/login", {
                    replace: true
                })
            }
        })


    }
    return (
        <nav className="navegacion">

            <Link
                className="navegacion_titulo"
                to="/"
            >
                HeroesApp
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