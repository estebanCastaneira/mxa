import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { useTranslation } from "react-i18next"
import SwitchLang from "../switch/SwitchLang"
import MobileNavFooter from "./MobileNavFooter"

function MobileNav({ mobileNav, setMobileNav, scrollToTop }) {
  const dropdownRef = useRef(null)
  const { t } = useTranslation()

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav)
  }

  useEffect(() => {
    const resizeMatch = (event) => {
      if (event.matches) {
        setMobileNav(false)
      }
    }

    const desktopMediaQuery = window.matchMedia("(min-width: 1024px)")
    desktopMediaQuery.addEventListener("change", resizeMatch)

    return () => {
      desktopMediaQuery.removeEventListener("change", resizeMatch)
    }
  }, [mobileNav])

  return (
    <div ref={dropdownRef}>
      <motion.button
        initial="hide"
        animate={mobileNav ? "show" : "hide"}
        onClick={toggleMobileNav}
        className="flex flex-col space-y-1 justify-around z-40 lg:hidden w-8 h-8 absolute right-0 transform -translate-y-1/2"
      >
        <motion.span
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: 45,
              y: 11,
            },
          }}
          className={`h-[2px] w-8 block ${mobileNav ? "bg-white" : "bg-black"}`}
        ></motion.span>
        <motion.span
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: -45,
              y: -1,
            },
          }}
          className={`h-[2px] w-8 block ${mobileNav ? "bg-white" : "bg-black"}`}
        ></motion.span>
        <motion.span
          variants={{
            hide: {
              rotate: 0,
              opacity: 1,
            },
            show: {
              rotate: -45,
              opacity: 0,
            },
          }}
          className={`h-[2px] w-8 block ${mobileNav ? "bg-white" : "bg-black"}`}
        ></motion.span>
      </motion.button>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 z-10 top-[5rem]"
        id="mobile-nav"
      >
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                className="lg:hidden h-[90vh] w-[100vw] flex flex-col justify-around items-center font-bold bg-main-700 pb-5 px-8 text-center text-white"
                key="mobile-nav"
                variants={{
                  hide: {
                    y: "-100%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      staggerChildren: 0.1,
                    },
                  },
                  show: {
                    y: "0%",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      when: "beforeChildren",
                      staggerChildren: 0.1,
                      duration: 0.4,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
              >
                <div className="w-full">
                  <motion.ul
                    variants={{
                      hide: {
                        y: "10%",
                        opacity: 0,
                      },
                      show: {
                        y: "0%",
                        opacity: 1,
                      },
                    }}
                    className="list-none grid gap-7 text-xl tracking-wider"
                  >
                    <li>
                      <NavLink
                        to="/"
                        className="hover-underline-animation hover:text-black"
                        onClick={() => {
                          scrollToTop()
                          toggleMobileNav()
                        }}
                      >
                        {t("home")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about-us"
                        className="hover-underline-animation hover:text-black"
                        onClick={() => {
                          scrollToTop()
                          toggleMobileNav()
                        }}
                      >
                        {t("about")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services"
                        className="hover-underline-animation hover:text-black"
                        onClick={() => {
                          scrollToTop()
                          toggleMobileNav()
                        }}
                      >
                        {t("services")}
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink
                        to="/news"
                        className="hover-underline-animation hover:text-black"
                        onClick={() => {
                          scrollToTop()
                          toggleMobileNav()
                        }}
                      >
                        {t("news")}
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink
                        to="/team"
                        className="hover-underline-animation hover:text-black"
                        onClick={() => {
                          scrollToTop()
                          toggleMobileNav()
                        }}
                      >
                        {t("team")}
                      </NavLink>
                    </li>

                    <div className="flex flex-col items-center gap-10 justify-center">
                      <div className="deco-white-thin w-20"></div>
                      <SwitchLang mobile={true} />
                    </div>
                  </motion.ul>
                </div>
                <MobileNavFooter />
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MobileNav
