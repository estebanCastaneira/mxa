import axios from "axios";
import logo from "/img/icons/mxa_logo.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux_config/authSlice";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [message, setMessage] = useState({ message: "", count: 0 });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (username && password) {
        const response = await axios({
          method: "POST",
          url: `${import.meta.env.VITE_BACK_URL}/admin/login`,
          data: { username, password },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        return dispatch(login(response.data));
      } else {
        return setMessage({
          message: "Deben llenarse todos los campos",
          count: message.count,
        });
      }
    } catch (error) {
      if (message.count < 2) {
        return setMessage({
          message: "Usuario y/o contraseña incorrecta/s",
          count: message.count + 1,
        });
      }
      return setMessage({
        message: "Olvidó su contraseña?",
        count: message.count + 1,
      });
    }
  };
  const hanldeUsername = (e) => {
    return setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    return setPassword(e.target.value);
  };
  useEffect(() => {
    const redirectToDashboard = () => {
      if (token) {
        navigate("/admin/dashboard");
      }
    };
    redirectToDashboard();
  }, [token, navigate]);
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-main-500 to-white">
      <form method="get" onSubmit={handleSubmit}>
        <div className="border flex flex-col p-5 bg-white rounded-md">
          <div className="my-4">
            <img src={logo} alt="MXA Logo" className="my-0 mx-auto w-56" />
          </div>
          <div className="my-4">
            <div className="mx-3 my-4 flex ">
              <label className="w-24" htmlFor="username">
                Usuario:
              </label>
              <input
                className="mx-1 border rounded-sm w-auto"
                type="text"
                name="username"
                id="username"
                onChange={hanldeUsername}
              />
            </div>
            <div className="mx-3 my-4 flex">
              <label className="w-24" htmlFor="password">
                Contraseña:
              </label>
              <input
                className="mx-1 border rounded-sm w-auto"
                type="password"
                name="password"
                id="password"
                onChange={handlePassword}
              />
            </div>
          </div>
          <div className="my-6 relative">
            <p className="absolute bottom-0 mx-3 text-sm text-red-400">
              {message.message}{" "}
              {message.count >= 3 && (
                <Link
                  as={Link}
                  to={"/admin/reset-password"}
                  className="text-blue-500 underline ml-1"
                >
                  Resetear
                </Link>
              )}
            </p>
          </div>
          <div className="self-center">
            <button
              className="border rounded-md py-2 px-4 hover:bg-main-400 hover:text-white"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
