import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { setArticles } from "./redux_config/articleSlice"
import { setStaff } from "./redux_config/staffSlice"
import { setServices } from "./redux_config/serviceSlice"
import i18n from "/i18n.js"

import axios from "axios"

import Navbar from "./components/common/navbar/Navbar"
import Home from "./components/pages/home/Home"
import Login from "./components/pages/login/Login"
import Dashboard from "./components/pages/dashboard/Dashboard"
import Footer from "./components/common/footer/Footer"
import Team from "./components/pages/team/Team"
import ResetPassword from "./components/pages/reset_password/ResetPassword"
import Article from "./components/pages/article/Article"
import Err404 from "./components/pages/Err404/Err404"
import AboutUs from "./components/pages/aboutUs/AboutUs"
import Services from "./components/pages/services/Services"
import News from "./components/pages/news/News"

function App() {
  const { pathname: currentPage } = useLocation()
  const pagesNoNavNoFoot = [
    "/admin/login",
    "/admin/dashboard",
    "/admin/reset-password",
  ]
  const token = useSelector((state) => state.auth.token)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const [articlesResponse, staffResponse] = await Promise.all([
  //         axios.get(`${import.meta.env.VITE_BACK_URL}articles`),
  //         axios.get(`${import.meta.env.VITE_BACK_URL}/equipo`),
  //       ])

  //       dispatch(setArticles(articlesResponse.data))
  //       dispatch(setStaff(staffResponse.data))
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData()
  // }, [dispatch]) --> With Backend

  useEffect(() => {
    async function fetchData() {
      try {
        const [articlesResponse, staffResponse, servicesResponse] =
          await Promise.all([
            fetch("/data/articles.json"),
            fetch("/data/team.json"),
            fetch("/data/services.json"),
          ])
        const articlesData = await articlesResponse.json()
        const staffData = await staffResponse.json()
        const servicesData = await servicesResponse.json()

        dispatch(setArticles(articlesData))
        dispatch(setStaff(staffData))
        dispatch(setServices(servicesData))
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [dispatch])

  return (
    <>
      {!pagesNoNavNoFoot.includes(currentPage) && <Navbar />}
      <Routes>
        <Route path="*" element={<Err404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/tax" element={<Services />} />
        <Route path="/services/accounting" element={<Services />} />
        <Route path="/services/legal" element={<Services />} />
        <Route path="/services/notary" element={<Services />} />
        {/* <Route path="/news" element={<News />} />
        <Route path="/news/article/:id" element={<Article />} /> */}
        {/* <Route path="/admin/login" element={<Login />} />
        {/* <Route
          path="/admin/dashboard"
          element={
            token ? (
              <Dashboard />
            ) : (
              <Navigate to="/admin/login" replace={true} />
            )
          }
        />
        <Route path="/admin/reset-password" element={<ResetPassword />} /> */}
      </Routes>
      {!pagesNoNavNoFoot.includes(currentPage) && (
        <Footer
          // white={currentPage === "/" || currentPage === "/about-us"}
          white={currentPage === "/about-us"}
          aboutUs={currentPage === "/about-us"}
        />
      )}
    </>
  )
}

export default App
