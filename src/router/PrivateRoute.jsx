/* eslint-disable react/prop-types */
import { useContext } from "react"
import AuthContext from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { pathname, search } = useLocation();

    const { logged } = useContext(AuthContext);
    const pathRecord = pathname + search;
    localStorage.setItem("pathRecord", pathRecord);

    return logged
        ? children
        : <Navigate to="login" />
}

export default PrivateRoute