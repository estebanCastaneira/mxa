import i18next from "i18next"
import { setLang } from "../../../redux_config/langSlice"
import { useDispatch, useSelector } from "react-redux"

function SwitchLang({ mobile }) {
  const dispatch = useDispatch()
  const lang = document.getElementsByTagName("html")[0].lang
  const handleOnClick = (code) => {
    i18next.changeLanguage(code)
    document.getElementsByTagName("html")[0].lang = code
    return dispatch(setLang(code))
  }

  return (
    <div className="flex w-fit h-fit gap-3 ">
      <div
        className={`${
          lang !== "es"
            ? "opacity-40 hover:cursor-pointer hover-underline-animation  hover:opacity-100"
            : "hover:brightness-90 hover:cursor-default pointer-events-none transition-all duration-300 transform "
        } ${mobile ? "hover:text-black" : "hover:text-main-700"}`}
        onClick={() => handleOnClick("es")}
      >
        <p className="w-7">ES</p>
      </div>
      <div>
        <p>|</p>
      </div>
      <div
        className={`${
          lang !== "en"
            ? "opacity-40 hover:cursor-pointer hover-underline-animation hover:opacity-100"
            : "hover:brightness-90 hover:cursor-default pointer-events-none transition-all duration-300 transform"
        } ${mobile ? "hover:text-black" : "hover:text-main-700"}`}
        onClick={() => handleOnClick("en")}
      >
        <p className="w-7">EN</p>
      </div>
    </div>
  )
}

export default SwitchLang
