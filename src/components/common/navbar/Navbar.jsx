import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import SwitchLang from "../switch/SwitchLang"
import { useTranslation } from "react-i18next"
import logo from "/img/icons/mxa_icon_original.svg"
import logo_white from "/img/icons/mxa_icon_white.svg"
import { motion, AnimatePresence } from "framer-motion"
import MobileNav from "./MobileNav"

function Navbar() {
  const dropdownRef = useRef(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const { t } = useTranslation()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    if (isDropdownOpen) {
      setTimeout(() => {
        setIsDropdownOpen(false)
      }, 200)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          closeDropdown()
        }
      }
    }
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isDropdownOpen])

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <nav
        className={`sticky top-0 z-50 shadow-md transition-all duration-500 ${
          mobileNav ? "bg-main-700" : "bg-white"
        }`}
        id="mxa-nav"
      >
        <div className="relative text-black flex justify-between items-center mx-6 py-6 lg:px-0 lg:mx-10 lg:py-3 2xl:mx-32">
          <div className="flex justify-center items-center">
            <div>
              <NavLink to="/" onClick={scrollToTop}>
                <img
                  className="lg:w-[100%] w-8"
                  src={mobileNav ? logo_white : logo}
                  alt="Logo"
                />
              </NavLink>
            </div>
            <div className="lg:hidden">
              <MobileNav
                mobileNav={mobileNav}
                setMobileNav={setMobileNav}
                scrollToTop={scrollToTop}
                scrollToBottom={scrollToBottom}
              />
            </div>
          </div>
          <div className="hidden gap-20 items-center font-bold text-lg lg:flex">
            <div>
              <ul className="hidden md:flex md:justify-end md:items-center gap-10 md:gap-9 whitespace-nowrap">
                <li>
                  <NavLink
                    to="/about-us"
                    className="hover-underline-animation hover:text-main-700"
                    onClick={scrollToTop}
                  >
                    {t("about")}
                  </NavLink>
                </li>
                <li ref={dropdownRef}>
                  <motion.button
                    initial="hide"
                    animate={isDropdownOpen ? "show" : "hide"}
                    onClick={toggleDropdown}
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 hover:text-main-700 md:p-0 md:w-auto"
                  >
                    {t("services")}
                    <svg
                      className={`w-2.5 h-2.5 ml-2.5 ${
                        isDropdownOpen ? "transform rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </motion.button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-6 font-bold bg-white shadow-xl w-72 absolute border-2 border-main-700 z-50 dropdown-menu"
                      >
                        <ul className="text-md text-main-700 hover:text-white divide-y-2 divide-main-700">
                          <li>
                            <NavLink
                              to="/services/tax"
                              className="block px-6 py-4 uppercase text-secondary-900 hover:bg-secondary-900 hover:text-white"
                              onClick={() => {
                                closeDropdown()
                                scrollToTop()
                              }}
                            >
                              {t("tax")}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/accounting"
                              className="block px-6 py-4 uppercase text-secondary-900 hover:bg-secondary-900 hover:text-white"
                              onClick={() => {
                                closeDropdown()
                                scrollToTop()
                              }}
                            >
                              {t("accounting")}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/legal"
                              className="block px-6 py-4 uppercase text-secondary-900 hover:bg-secondary-900 hover:text-white"
                              onClick={() => {
                                closeDropdown()
                                scrollToTop()
                              }}
                            >
                              {t("legal")}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/notary"
                              className="block px-6 py-4 uppercase text-secondary-900 hover:bg-secondary-900 hover:text-white"
                              onClick={() => {
                                closeDropdown()
                                scrollToTop()
                              }}
                            >
                              {t("notary")}
                            </NavLink>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
                {/* <li>
                  <NavLink
                    to="/news"
                    className="hover-underline-animation hover:text-secondary-900"
                    onClick={scrollToTop}
                  >
                    {t("news")}
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to="/team"
                    className="hover-underline-animation hover:text-secondary-900"
                    onClick={scrollToTop}
                  >
                    {t("team")}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <button
                to="#"
                className="hover-underline-animation hover:text-secondary-900 hover:cursor-pointer"
                onClick={scrollToBottom}
              >
                {t("contact")}
              </button>
            </div>
            <SwitchLang />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
