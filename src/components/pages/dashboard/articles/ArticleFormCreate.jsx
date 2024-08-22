import imageFrame from "/img/icons/image.png"
import { useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { storeArticle } from "../../../../redux_config/articleSlice"
import SwitchLang from "../../../common/switch/SwitchLang"
function ArticleFormCreate({ setRender }) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const lang = useSelector((state) => state.lang)

  const [isLoading, setIsLoading] = useState(false)

  const [title_es, setTitleEs] = useState("")
  const [title_en, setTitleEn] = useState("")
  const [author, setAuthor] = useState("MXA")
  const [content_es, setContentEs] = useState("")
  const [content_en, setContentEn] = useState("")
  const [imagePreview, setImagePreview] = useState(imageFrame)
  const [image, setImage] = useState("")
  const [message, setMessage] = useState("")

  const handleImageOnChange = (e) => {
    const imageFile = e.target.files[0]
    imageFile && setImagePreview(URL.createObjectURL(imageFile)),
      setImage(imageFile)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title_es || !title_en || !content_es || !content_en || !image) {
      return setMessage(
        "Título, Contenido (en ambos idiomas) e Imagen son campos obligatorios "
      )
    }
    const formData = new FormData()
    formData.append("title_es", title_es)
    formData.append("title_en", title_en)
    formData.append("author", author)
    formData.append("content_es", content_es)
    formData.append("content_en", content_en)
    formData.append("image", image)

    setIsLoading(true)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACK_URL}articles`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      if (response) {
        const id = response.data.id
        const imageP = response.data.image
        dispatch(
          storeArticle({
            id,
            title_es,
            title_en,
            author,
            image: imageP,
            content_es,
            content_en,
          })
        )
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
    return setRender({ render: "" })
  }
  return (
    <div className="bg-neutral-200 h-fit  w-8/12 rounded-xl shadow-2xl p-9 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-12">
      <div className="bg-gradient-to-bl from-main-100 to-main-600 p-4 rounded-t-xl absolute top-0 left-0 w-full">
        <h2 className="font-bold text-start mt-2 ml-12  text-neutral-100 text-2xl">
          Crear Artículo
        </h2>
      </div>
      <div className="mt-14">
        <div className="flex justify-end items-end">
          <SwitchLang />
        </div>
        <form className="text-lg">
          {lang === "es" ? (
            <div className="m-3 flex flex-col gap-2">
              <label className="" htmlFor="title">
                Titulo del Artículo:
              </label>
              <input
                className="p-1 rounded-md"
                type="text"
                value={title_es}
                placeholder="Título del Artículo"
                onChange={(e) => setTitleEs(e.target.value)}
              />
            </div>
          ) : (
            <div className="m-3 flex flex-col gap-2">
              <label className="" htmlFor="title">
                Title:
              </label>
              <input
                className="p-1 rounded-md"
                type="text"
                value={title_en}
                placeholder="Título del Artículo (inglés)"
                onChange={(e) => setTitleEn(e.target.value)}
              />
            </div>
          )}

          <div className="m-3 flex flex-col gap-2">
            <label htmlFor="author">Autor:</label>
            <input
              className="p-1 rounded-md"
              type="text"
              value={author}
              placeholder="Autor del artículo, de no asingarse por defecto será MXA"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="m-3 flex-col gap-2">
            <div className="flex gap-2 my-5">
              <label htmlFor="image">
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
              alt="article image"
            />
          </div>
          {lang === "es" ? (
            <div className="m-3 flex flex-col">
              <label htmlFor="content">Contenido:</label>
              <textarea
                className="p-1 rounded-md h-48"
                name="content"
                id="content"
                value={content_es}
                placeholder="Contenido del Artículo..."
                onChange={(e) => setContentEs(e.target.value)}
              ></textarea>
            </div>
          ) : (
            <div className="m-3 flex flex-col">
              <label htmlFor="content">Content:</label>
              <textarea
                className="p-1 rounded-md h-48"
                name="content"
                id="content"
                value={content_en}
                placeholder="Contenido del artículo (inglés)"
                onChange={(e) => setContentEn(e.target.value)}
              ></textarea>
            </div>
          )}
          <div className="ml-5 mb-2">
            <p className="text-red-500 absolute">{message}</p>
          </div>
          <div className="mt-12 flex gap-5 justify-center">
            <div
              className="p-5 w-fit rounded-md text-white hover:cursor-pointer bg-green-500"
              onClick={handleSubmit}
            >
              <button className={isLoading && "opacity-20 pointer-events-none"}>
                Crear Artículo
              </button>
            </div>
            <div
              className="p-5 w-fit rounded-md  hover:cursor-pointer bg-white"
              onClick={(e) => {
                e.preventDefault()
                setRender({ render: "" })
              }}
            >
              <button>Cancelar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default ArticleFormCreate
