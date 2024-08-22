import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateAdmin } from "../../../../redux_config/adminSlice";
import emailValidation from "../../../../functions/emailValidation";

function AdminFormUpdate({ setRender, admin }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(false);

  const [firstname, setFirstname] = useState(admin.firstname);
  const [lastname, setLastname] = useState(admin.lastname);
  const [email, setEmail] = useState(admin.email);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password || !passwordConfirm) {
      setMessage("Deben llenarse todos los campos.");
      return;
    }
    if (password !== passwordConfirm) {
      setMessage("El nuevo password y la confirmación no coinciden.");
      return;
    }
    if (!emailValidation(email)) {
      setMessage("Debe asignar un correo válido.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios({
        method: "PATCH",
        url: `${import.meta.env.VITE_BACK_URL}/admin/${admin.id}`,
        data: { firstname, lastname, email, password },
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        dispatch(
          updateAdmin({
            id: admin.id,
            firstname,
            lastname,
            email,
            role: admin.role,
          })
        );
        setIsLoading(false);
        setRender({ render: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-neutral-200 p-6 h-fit  w-5/12 rounded-xl shadow-2xl absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-12">
      <div className="bg-gradient-to-bl from-main-100 to-main-600 p-4 rounded-t-xl absolute top-0 left-0 w-full">
        <h2 className="font-bold text-start mt-2 ml-12  text-neutral-100 text-2xl">
          Editar Administrador
        </h2>
      </div>
      <div className="mt-16">
        <form className="text-lg">
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="flex justify-center items-center">
              <label className="mr-2 w-60" htmlFor="firstname">
                Nombre:
              </label>
              <input
                className="p-1 rounded-md w-full"
                type="text"
                value={firstname}
                placeholder="Ej:'Luis'"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className=" flex justify-center items-center">
              <label className="mr-2 w-60" htmlFor="lastname">
                Apellido:
              </label>
              <input
                className="p-1 rounded-md w-full"
                type="text"
                value={lastname}
                placeholder="Ej:'Suárez'"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className=" flex justify-center items-center">
              <label className="mr-2 w-60" htmlFor="email">
                Email:
              </label>
              <input
                className="p-1 rounded-md w-full"
                type="email"
                value={email}
                placeholder="Ej: 'email@email.com'"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" flex justify-center items-center">
              <label className="mr-2 w-60" htmlFor="email">
                Nuevo Password:
              </label>
              <input
                className="p-1 rounded-md w-full"
                type="password"
                placeholder="Nuevo password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className=" flex justify-center items-center">
              <label className="mr-2 w-60" htmlFor="email">
                Confirmar Password:
              </label>
              <input
                className="p-1 rounded-md w-full"
                type="password"
                placeholder="Confirmar nuevo password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
          </div>
          <div className="ml-5">
            <p className="text-red-500 absolute mt-3">{message}</p>
          </div>
          <div className="mt-12 flex gap-5 justify-center">
            <div
              className="p-5 w-fit rounded-md text-white hover:cursor-pointer bg-blue-500"
              onClick={handleSubmit}
            >
              <button className={isLoading && "opacity-20 pointer-events-none"}>
                Editar Administrador
              </button>
            </div>
            <div
              className="p-5 w-fit rounded-md  hover:cursor-pointer bg-white"
              onClick={(e) => {
                e.preventDefault();
                setRender({ render: "" });
              }}
            >
              <button>Cancelar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminFormUpdate;
