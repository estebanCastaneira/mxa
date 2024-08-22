import { Link } from "react-router-dom"
function Err404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-center text-3xl">Oops! Error 404 Page Not Found</h1>
      <Link
        to={-1}
        onClick={() => {
          window.scrollTo(0, 0)
        }}
        className="outline-btn outline-btn-var w-44 mx-auto text-center"
      >
        Volver
      </Link>
    </div>
  )
}

export default Err404
