import axios from "axios"
import Sidebar from "./sidebar/Sidebar"
import Articles from "./articles/Articles"
import Admin from "./admin/Admin"
import Staff from "./staff/Staff"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setArticles } from "../../../redux_config/articleSlice"
import { setStaff } from "../../../redux_config/staffSlice"
import { setAdmins } from "../../../redux_config/adminSlice"
function Dashboard() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const [optionSelected, setOptionSelected] = useState("")
  const handleOptionSelected = (option) => {
    setOptionSelected(option)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const [articlesResponse, adminsResponse, staffResponse] =
          await Promise.all([
            axios.get(`${import.meta.env.VITE_BACK_URL}articles`),
            axios({
              method: "GET",
              url: `${import.meta.env.VITE_BACK_URL}/admin`,
              headers: {
                authorization: `Bearer ${token}`,
              },
            }),
            axios.get(`${import.meta.env.VITE_BACK_URL}/equipo`),
          ])

        dispatch(setArticles(articlesResponse.data))
        dispatch(setStaff(staffResponse.data))
        dispatch(setAdmins(adminsResponse.data))
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [dispatch, token])
  function renderComponent() {
    switch (optionSelected) {
      case "admin":
        return <Admin />
      case "articulos":
        return <Articles />
      case "equipo":
        return <Staff />
      default:
        return null
    }
  }
  return (
    <main className="">
      <div>
        <Sidebar handleOptionSelected={handleOptionSelected} />
      </div>

      <div className="dashboard">{renderComponent()}</div>
    </main>
  )
}

export default Dashboard
