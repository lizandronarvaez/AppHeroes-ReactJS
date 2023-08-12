/* eslint-disable react/prop-types */
import { useReducer } from "react"
import AuthContext from "./AuthContext"
import authReducer from "./authReducer"
import types from "../types/types"

const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
        logged: !!user,
        user
    }
}
const AuthProvider = ({ children }) => {
    const [isLogged, actionTask] = useReducer(authReducer, {}, init);
    const loginUser = (user) => {
        const action = { type: types.login, payload: user };
        localStorage.setItem("user", JSON.stringify(user))
        actionTask(action);
    };

    const logout = () => {
        localStorage.removeItem("user");
        const action = {type: types.logout};
        actionTask(action);
    }
    return (
        <AuthContext.Provider value={{ ...isLogged, loginUser, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider