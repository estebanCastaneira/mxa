import imageFrame from "/img/icons/image.png";

import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { storeStaff } from "../../../../redux_config/staffSlice";

function StaffFormCreate({ setRender }) {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const [isLoading, setIsLoading] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [position_es, setPositionEs] = useState("");
  const [position_en, setPositionEn] = useState("");
  const [description_es, setDescriptionEs] = useState("");
  const [description_en, setDescriptionEn] = useState("");
  const [imagePreview, setImagePreview] = useState(imageFrame);
  const [image, setImage] = useState("");

  const [linkedin, setLinkedin] = useState("");

  const [message, setMessage] = useState("");

  const handleImageOnChange = (e) => {
    const imageFile = e.target.files[0];
    imageFile && setImagePreview(URL.createObjectURL(imageFile)),
      setImage(imageFile);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !firstname ||
      !lastname ||
      !email ||
      !position_es ||
      !position_en ||
      !description_es ||
      !description_en ||
      !linkedin ||
      !image
    ) {
      return setMessage("Todos los  campos son obligatorios.");
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("position_es", position_es);
    formData.append("position_en", position_en);
    formData.append("description_es", description_es);
    formData.append("description_en", description_en);
    formData.append("linkedin", linkedin);

    setIsLoading(true);
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACK_URL}/equipo`,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        const id = response.data.id;
        const imageP = response.data.image;
        dispatch(
          storeStaff({
            id,
            firstname,
            lastname,
            email,
            position_es,
            position_en,
            description_es,
            description_en,
            linkedin,
            image: imageP,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    return setRender({ render: "" });
  };
  return (
    <div className="bg-neutral-200 p-6 h-fit  w-9/12 rounded-xl shadow-2xl absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-12">
      <div className="bg-gradient-to-bl from-main-100 to-main-600 p-4 rounded-t-xl absolute top-0 left-0 w-full">
        <h2 className="font-bold text-start mt-2 ml-12  text-neutral-100 text-2xl">
          Crear Miembro del Equipo
        </h2>
      </div>

      <div className="mt-16">
        <form className="text-lg">
          <div className="m-3 flex gap-2">
            <div className="w-6/12 flex">
              <label className="mr-2" htmlFor="firstname">
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
            <div className="w-6/12 flex">
              <label className="mr-2" htmlFor="lastname">
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
            <div className="w-6/12 flex">
              <label className="mr-2" htmlFor="lastname">
                Email:
              </label>
              <input
                className="p-1 rounded-md w-full"
                type="email"
                value={email}
                placeholder="Ej: 'suarez@mxa.com.uy'"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="m-3 flex gap-2">
            <div className="w-6/12 flex">
              <label className="mr-2" htmlFor="position">
                Linkedin:
              </label>
              <input
                className="p-1 rounded-md w-full"
                type="text"
                value={linkedin}
                placeholder="Link del perfil de Linkedin"
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>
            <div className="w-6/12 flex">
              <label className="mr-2" htmlFor="position">
                Cargo:
              </label>
              <input
                className="p-1 rounded-md w-full"
                type="text"
                value={position_es}
                placeholder="Poisición/cargo que ocupa"
                onChange={(e) => setPositionEs(e.target.value)}
              />
            </div>
            <div className="w-6/12 flex">
              <label className="mr-2" htmlFor="position">
                Charge:
              </label>
              <input
                className="p-1 rounded-md w-full"
                type="text"
                value={position_en}
                placeholder="Poisición/cargo que ocupa (inglés)"
                onChange={(e) => setPositionEn(e.target.value)}
              />
            </div>
          </div>
          <div className="m-3 flex-col gap-2">
            <div className="flex gap-2 my-5">
              <label className="mr-3" htmlFor="image">
                Imagen: <span>(solo .jpg)</span>
              </label>
              <input
                type="file"
                accept="image"
                onChange={handleImageOnChange}
              />
            </div>
            <img
              className="w-2/12 rounded-md"
              src={imagePreview}
              alt="staff image"
            />
          </div>
          <div className="m-3 flex flex-col">
            <label className="mr-2" htmlFor="content">
              Descripción:
            </label>
            <input
              className="p-1 rounded-md"
              name="description"
              id="description"
              value={description_es}
              placeholder="Breve descripción que se quiera realizar..."
              onChange={(e) => setDescriptionEs(e.target.value)}
            />
          </div>
          <div className="m-3 flex flex-col">
            <label className="mr-2" htmlFor="content">
              Description:
            </label>
            <input
              className="p-1 rounded-md"
              name="description"
              id="description"
              value={description_en}
              placeholder="Breve descripción que se quiera realizar (inglés)..."
              onChange={(e) => setDescriptionEn(e.target.value)}
            />
          </div>
          <div className="ml-5 mb-2">
            <p className="text-red-500 absolute">{message}</p>
          </div>
          <div className="mt-12 flex gap-5 justify-center">
            <div
              className="p-5 w-fit rounded-md text-white hover:cursor-pointer bg-green-500"
              onClick={handleSubmit}
            >
              <button className={isLoading && "opacity-20 pointer-events-none"}>
                Crear Miembro del Equipo
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

export default StaffFormCreate;
