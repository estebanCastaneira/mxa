import { useSelector } from "react-redux"
import { useState } from "react"
import alert from "/img/icons/alert.png"
import axios from "axios"
function ModalDelete({ id, item, category, dispatch, deleter, setRender }) {
  const token = useSelector((state) => state.auth.token)

  const [isLoading, setIsLoading] = useState(false)
  const handleOnClickCancel = () => {
    setRender({ render: "" })
  }
  const handleOnClickDelete = async () => {
    setIsLoading(true)
    if (category === "Artículos") {
      try {
        const response = await axios({
          method: "DELETE",
          url: `${import.meta.env.VITE_BACK_URL}articles/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response) {
          dispatch(deleter(id))
        }
      } catch (error) {
        console.log(error)
      }
    }
    if (category === "Equipo") {
      try {
        const response = await axios({
          method: "DELETE",
          url: `${import.meta.env.VITE_BACK_URL}/equipo/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response) {
          dispatch(deleter(id))
        }
      } catch (error) {
        console.log(error)
      }
    }
    if (category === "Admin") {
      try {
        const response = await axios({
          method: "DELETE",
          url: `${import.meta.env.VITE_BACK_URL}/admin/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response) {
          dispatch(deleter(id))
        }
      } catch (error) {
        console.log(error)
      }
    }
    setIsLoading(false)
    return setRender({ render: "" })
  }
  return (
    <div className="bg-neutral-100 rounded-xl shadow-2xl flex flex-col justify-evenly items-center h-80 w-5/12 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div>
        <img src={alert} alt="alert icon" />
      </div>
      <div>
        <h2 className="text-lg">
          Está seguro que quiere borrar <strong>{item}</strong> de{" "}
          <strong> {category}</strong>?
        </h2>
      </div>
      <div className="flex gap-7 justify-around self-end mr-10">
        <div className="py-4 px-4 bg-white border border-main-800 rounded hover:cursor-pointer hover:brightness-110">
          <button onClick={handleOnClickCancel}>Cancelar</button>
        </div>
        <div className="py-4 px-10 bg-red-500 border border-main-800 rounded hover:cursor-pointer hover:brightness-110 text-white">
          <button
            className={isLoading && "opacity-20 pointer-events-none"}
            onClick={handleOnClickDelete}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete
