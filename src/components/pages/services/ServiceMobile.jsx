import { useEffect, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
function SerivceMobile({ service, lang }) {
  const ref = useRef(null)
  const isInView = useIsInViewport(ref, lang)
  const [view, setView] = useState(false)
  const { t } = useTranslation()
  useEffect(() => {
    setView(isInView)
  }, [isInView])
  return (
    <motion.div
      initial={{ opacity: 0, x: 800 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      ref={ref}
      className={`flex flex-col gap-5  transition-colors duration-[1.3s] ${
        view ? "text-main-700" : "text-black"
      }`}
    >
      <div className={view ? "deco-line" : "deco-black-line"}></div>
      <h4 className="uppercase font-bold tracking-wider text-xl">
        {t(service.title)}
      </h4>
      <p className="uppercase text-sm font-semibold tracking-wider text-black">
        {lang === "es" ? service.description_es : service.description_en}
      </p>
      <ul className="list-disc space-y-2 ps-4 text-sm text-black">
        {lang === "es"
          ? service.list_es.map((item, index) => <li key={index}>{item}</li>)
          : service.list_en.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </motion.div>
  )
}
function useIsInViewport(ref, lang) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  )

  useEffect(() => {
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer, lang])

  return isIntersecting
}
export default SerivceMobile
