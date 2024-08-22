import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import mainImage from "/img/about/about_main.png"
import {
  Reveal,
  AnimationXInverse,
  AnimationX,
  Opacity,
} from "../../common/Animations"
import { useSelector } from "react-redux"

function AboutUs() {
  const { t } = useTranslation()
  const lang = useSelector((state) => state.lang)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Reveal>
        <div className="relative header about-header flex flex-col gap-5 justify-end pb-28 ps-10 2xl:ps-32">
          <div className="deco-white-line w-12 lg:w-20"></div>
          <h1 className="main-title break-words tracking-wider">
            {lang === "es" ? (
              <>
                <span>¿Quiénes</span>
                <span>somos?</span>
              </>
            ) : (
              <span>About Us</span>
            )}
          </h1>
        </div>
      </Reveal>
      <div className="relative left-1/2 transform -translate-x-1/2 translate-y-[-40px] md:translate-y-[-70px] lg:translate-y-[-140px] flex flex-col-reverse md:flex-row md:justify-center items-center md:items-stretch">
        <AnimationX>
          <div className="relative z-40 top-[-80px] md:top-[125.5px] right-[30px] md:right-[50%] xl:right-[70%] w-[281px] h-[226px] md:w-[600px] md:h-[650px]">
            <img
              className="h-full w-full object-cover"
              src={mainImage}
              alt="about us"
            />
          </div>
        </AnimationX>
        <Opacity>
          <div className="main-box md:absolute z-30 w-[296px] md:w-[886px] h-[588px] md:h-[876px] md:left-[30%] lg:left-[40%] xl:left-[35%] p-12 md:p-0">
            <div className="flex flex-col md:pe-20 w-full h-full items-center lg:items-end justify-start md:justify-center">
              <div className="text-white md:w-[340px] lg:w-[440px] text-xs md:text-xl tracking-wide">
                <AnimationXInverse>
                  <div className="deco-white-line w-40 mb-16 hidden md:block"></div>
                  <div className="deco-white-thin w-28 mb-12 block md:hidden"></div>
                  <div className="flex flex-col gap-4">
                    <p>{t("aboutUs1")}</p>
                    <p>{t("aboutUs2")}</p>
                    <p>{t("aboutUs3")}</p>
                  </div>
                </AnimationXInverse>
              </div>
            </div>
          </div>
        </Opacity>
      </div>
    </>
  )
}

export default AboutUs
