import axios from "axios";
import logo from "/img/icons/mxa_logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function ResetPassword() {
  const [message, setMessage] = useState({ message: "", status: false });
  const [username, setUsername] = useState("");
  const [newPassword, setNewPasword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !newPassword || !passwordConfirm) {
      setMessage({
        message: "Deben llenarse todos los campos.",
        status: false,
      });
      return;
    }
    if (newPassword !== passwordConfirm) {
      setMessage({
        message: "El nuevo password y la confirmación no coinciden.",
        status: false,
      });
      return;
    }
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACK_URL}/admin/reset-password`,
        data: { username, password: newPassword },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      setMessage({
        message: `Se ha cambiado el password de ${username} exitosamente.`,
        status: true,
      });
      setDisabled(true);
      return;
    } catch (error) {
      console.log(error);
    }
  };
  const hanldeUsername = (e) => {
    return setUsername(e.target.value);
  };
  const handlerNewPassword = (e) => {
    return setNewPasword(e.target.value);
  };
  const handlerPasswordConfirm = (e) => {
    return setPasswordConfirm(e.target.value);
  };

  useEffect(() => {
    const redirectToDashboard = () => {};
    redirectToDashboard();
  }, []);
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-main-500 to-white">
      <form method="get" onSubmit={handleSubmit}>
        <div className="border flex flex-col p-5 bg-white rounded-md">
          <div className="my-4">
            <img src={logo} alt="MXA Logo" className="my-0 mx-auto w-56" />
          </div>
          <div className="my-4">
            <div className="mx-3 my-4 flex ">
              <label className="w-36" htmlFor="username">
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
            <div className="mx-3 my-4 flex ">
              <label className="w-36" htmlFor="newPassword">
                Nuevo Password:
              </label>
              <input
                className="mx-1 border rounded-sm w-auto"
                type="password"
                name="newPassword"
                id="newPassword"
                onChange={handlerNewPassword}
              />
            </div>
            <div className="mx-3 my-4 flex ">
              <label className="w-36" htmlFor="passwordConfirm">
                Confirmar Password:
              </label>
              <input
                className="mx-1 border rounded-sm w-auto"
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                onChange={handlerPasswordConfirm}
              />
            </div>
          </div>
          <div className="my-10 relative">
            <p
              className={`absolute bottom-0 mx-3 text-sm ${
                message.status ? "text-green-600" : "text-red-500"
              }`}
            >
              {message.message}{" "}
              {message.status && (
                <Link
                  as={Link}
                  to={"/admin/login"}
                  className="text-blue-500 underline ml-1"
                >
                  Volver a Login
                </Link>
              )}
            </p>
          </div>
          <div className="self-center">
            <button
              className={`border rounded-md py-2 px-4 ${
                !disabled && "hover:bg-main-400 hover:text-white"
              } `}
              type="submit"
              disabled={disabled}
            >
              Resetear Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
