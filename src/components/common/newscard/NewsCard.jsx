import React from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import textFromDB from "../../../functions/textFromDB"

function NewsCard({ id, title, image, content, date, wider }) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 100, damping: 16 }}
        className={`relative flex-none shadow-lg bg-white mb-5 w-72 max-h-[440px] min-h-[440px] md:min-h-[630px] md:max-h-max ${
          wider ? "sm:w-104" : "sm:w-96"
        }`}
        style={{
          boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <NavLink
          to={`/news/article/${id}`}
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <img
            className="w-full h-40 sm:h-60 object-cover"
            src={image}
            alt="article image"
          />
        </NavLink>
        <div className={`px-4 sm:px-6  ${wider ? "py-10" : "py-3 sm:py-5"}`}>
          <p className="text-xs sm:text-sm text-main-700 mb-2 md:mb-4">
            {date}
          </p>
          <NavLink
            to={`/news/article/${id}`}
            onClick={() => {
              window.scrollTo(0, 0)
            }}
          >
            <h3 className="w-fit font-bold text-lg md:text-4xl text-main-700 mb-5 pb-5 border-b-2 border-b-main-700 ">
              {title}
            </h3>
          </NavLink>
          <p className="text-main-700 text-sm md:text-lg pt-6 sm:pt-4 md:pt-10 tracking-widest">
            {textFromDB(content.slice(3, 90))}...
          </p>
        </div>
        <div className="absolute bottom-2 right-5">
          <NavLink
            to={`/news/article/${id}`}
            onClick={() => {
              window.scrollTo(0, 0)
            }}
            className="inline-block text-sm italic text-main-700"
          >
            Ver más <span>&gt;</span>
          </NavLink>
        </div>
      </motion.div>
    </>
  )
}

export default NewsCard
