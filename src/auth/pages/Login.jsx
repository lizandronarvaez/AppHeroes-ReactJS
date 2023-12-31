import { useNavigate } from "react-router-dom"
import "./Login.css"
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import useForm from "../hooks/useForm";
import Navbar from "../../interface/components/NavBar/Navbar";
import ErrorLogin from "../helpers/ErrorLogin";
const Login = () => {
  // Navigate
  const navigate = useNavigate();
  // authProvider
  const { loginUser } = useContext(AuthContext);
  // 
  const { user, handleInputChange } = useForm({ user: "" });
  // Button
  const handleLogin = (e) => {
    e.preventDefault();
    const pathRecord = localStorage.getItem("pathRecord" || "/");
    if (user === "") return ErrorLogin();
    loginUser(user.trim());
    navigate(pathRecord, {
      replace: true
    });
  }
  return (
    <>
      <Navbar />

      <div className="form">
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleLogin}>
          <div className="form-box">
            <input type="text"
              name="user"
              placeholder="Introduce Usuario"
              onChange={handleInputChange}
              value={user} />
          </div>
          <div className="form-box">
            <input
              type="password"
              name="password"
              placeholder="Introduce Password" />
          </div>
          <button
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default Login