import { useTranslation } from "react-i18next"
import handshake from "/img/icons/handshake.svg"
import experience from "/img/icons/experience.svg"
import star from "/img/icons/star.svg"
import refresh from "/img/icons/refresh.svg"
import bulb from "/img/icons/bulb.svg"
import globe from "/img/icons/globe.svg"
import { Reveal } from "../../common/Animations"

function Values() {
  const { t } = useTranslation()
  return (
    <div className="relative block mx-10">
      <Reveal>
        <div className="relative flex flex-col text-center justify-center gap-8 mb-20 mx-8">
          <h2 className="text-main-700  text-xl md:text-4xl tracking-widest">
            {t("values")}
          </h2>
          <div className="deco-line mx-auto w-28 sm:w-32"></div>
          <div className="grid grid-cols-2 lg:flex lg:justify-around flex-wrap gap-10 md:gap-15 pt-10">
            <div className="flex flex-col justify-center items-center gap-4">
              <img className="" src={handshake} alt="Trust" />
              <p className="text-sm md:text-lg text-main-700 tracking-widest">
                {t("professionalism")}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img className="" src={experience} alt="Focus" />
              <p className="text-sm md:text-lg text-main-700 tracking-widest">
                {t("experience")}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img className="" src={star} alt="Itegrity" />
              <p className="text-sm md:text-lg text-main-700 tracking-widest">
                {t("personalization")}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img className="" src={refresh} alt="Excelence" />
              <p className="text-sm md:text-lg text-main-700 tracking-widest">
                {t("dynamism")}
              </p>
            </div>
            <div className="relative flex flex-col justify-center items-center gap-4">
              <img className="" src={globe} alt="International" />
              <p className="text-sm md:text-lg text-main-700 tracking-widest">
                {t("international")}
              </p>
            </div>
            <div className="relative flex flex-col justify-center items-center gap-4">
              <img className="" src={bulb} alt="Team Work" />
              <p className="text-sm md:text-lg text-main-700 tracking-widest">
                {t("creativity")}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default Values
