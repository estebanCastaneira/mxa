import React from "react"
import { Link } from "react-router-dom"
import mainImage from "/img/home/main-image.png"
import Values from "./Values"
import ServiceContainer from "./ServiceContainer"
import NewsContainer from "./NewsContainer"
import { useTranslation } from "react-i18next"
import { Reveal, AnimationXInverse, AnimationX } from "../../common/Animations"

function Home() {
  const { t } = useTranslation()

  return (
    <>
      <main>
        <Reveal>
          <div className="relative header main-header"></div>
        </Reveal>

        <Reveal>
          <div className="relative h-[320px] md:h-[650px] flex justify-center items-center">
            <div className="z-0 flex flex-wrap max-w-6xl absolute -top-20 2xl:-top-10 justify-center lg:justify-normal">
              <div className="main-box py-11 px-14 md:p-16 md:pe-52 md:grid md:basis-1/2 relative items-center mx-8 md:mx-0">
                <AnimationXInverse>
                  <div className="deco-white-thin w-[90px] md:w-[190px]"></div>
                  <h1 className="box-title py-11 md:py-14 text-xl md:text-4xl tracking-wider">
                    {t("home1")}
                  </h1>
                  <Link
                    to="/about-us"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                  >
                    <button className="outline-btn py-1 px-3 lg:py-2 lg:px-6 md:w-[250px] h-[42px] flex justify-start lg:justify-center items-start">
                      {t("homeButton")}
                    </button>
                  </Link>
                </AnimationXInverse>
              </div>
              <div className="basis-1/2 relative hidden lg:block">
                <img src={mainImage} alt="Mxa Office" />
                <AnimationX>
                  <div className="px-10 flex flex-col">
                    <div className="deco-black-line my-8 w-28"></div>
                    <p className="tracking-wider">{t("home2")}</p>
                  </div>
                </AnimationX>
              </div>
            </div>
          </div>
        </Reveal>
        <Values />
        <ServiceContainer />
        {/* <Reveal>
          <div className="bg-secondary-900 px-5 py-10 md:py-20 md:px-10  grid justify-center gap-4 sm:gap-10 mt-12">
            <h3 className="text-white font-bold text-xl md:text-4xl text-center tracking-widest">
              {t("news")}
            </h3>
            <div className="deco-white-thin w-10 md:w-28 mx-auto mb-10 md:mb-0"></div>
            <NewsContainer />
            <Link
              to={"/news"}
              className="outline-btn py-1 px-3 lg:py-2 lg:px-6 w-32 md:w-60 mx-auto text-center"
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              {t("seeAll")}
            </Link>
          </div>
        </Reveal> */}
      </main>
    </>
  )
}

export default Home
