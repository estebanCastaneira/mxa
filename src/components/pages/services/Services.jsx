import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import ServicesHeader from "./ServicesHeader"
import ServiceAside from "./ServicesAside"
import SerivceMobile from "./ServiceMobile"
import { AnimationXInverse } from "../../common/Animations"

function Services() {
  const { services, lang } = useSelector((state) => state)
  const [servicesData] = useState(services)
  const [value, setValue] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const navigate = useNavigate()
  const { pathname: currentPage } = useLocation()

  const { description_es, list_es, description_en, list_en } =
    servicesData[value]

  const handleServiceClick = (index) => {
    navigate(`/services/${servicesData[index].title}`)
  }
  useEffect(() => {
    const serviceSelected = currentPage.match(/\/services\/(.+)/)
    const pageService = { tax: 0, accounting: 1, legal: 2, notary: 3 }
    if (serviceSelected) {
      setValue(pageService[serviceSelected[1]])
    } else {
      setValue(0)
    }
  }, [currentPage])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(max-width: 768px)")
    desktopMediaQuery.matches && setIsMobile(true)

    const resizeMatch = (event) => {
      if (event.matches) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    desktopMediaQuery.addEventListener("change", resizeMatch)

    return () => {
      desktopMediaQuery.removeEventListener("change", resizeMatch)
    }
  }, [isMobile])

  return (
    <>
      <ServicesHeader lang={lang} />
      {isMobile && (
        <div className="flex flex-col justify-around mx-4 my-6 gap-5">
          {servicesData.map((service, index) => (
            <SerivceMobile key={index} service={service} lang={lang} />
          ))}
        </div>
      )}
      {!isMobile && (
        <div className="flex mx-12 my-20 gap-28 2xl:mx-32 overflow-hidden">
          <ServiceAside
            handleServiceClick={handleServiceClick}
            isMobile={isMobile}
            servicesData={servicesData}
            value={value}
          />
          <AnimationXInverse>
            <motion.div
              key={value}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start basis-1/2 gap-6 max-h-[45vh] overflow-auto"
            >
              <p className="uppercase text-xl">
                {lang === "es" ? description_es : description_en}
              </p>
              <ul className="list-disc space-y-2 ps-4">
                {lang === "es"
                  ? list_es.map((item, index) => <li key={index}>{item}</li>)
                  : list_en.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </motion.div>
          </AnimationXInverse>
        </div>
      )}
    </>
  )
}

export default Services
