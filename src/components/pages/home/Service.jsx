import { Opacity } from "../../common/Animations"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Service({ image, even, title }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  const { t } = useTranslation()
  return (
    <>
      <Opacity>
        <div className="w-[90%] grid grid-cols-2 mx-auto">
          <div className={even && "order-last"}>
            <div className="image-container">
              <img className="square-image" src={image} alt={title} />
            </div>
          </div>
          <Link
            to={`/services/${title}`}
            className="services-box w-[100%] h-full px-5 sm:px-10 md:px-20 text-black hover:text-main-700 flex flex-col justify-center items-start sm:items-baseline"
            onClick={scrollToTop}
          >
            <div className="deco-black-line w-10 mb-4 sm:w-32 sm:mb-8"></div>
            <p className="font-bold text-sm sm:text-[14px] md:text-[28px] lg:text-[40px] uppercase tracking-widest">
              {t(title)}
            </p>
          </Link>
        </div>
      </Opacity>
    </>
  )
}

export default Service
