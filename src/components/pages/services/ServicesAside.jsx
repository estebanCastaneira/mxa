import { AnimationX } from "../../common/Animations"
import { useTranslation } from "react-i18next"
function ServiceAside({ handleServiceClick, isMobile, servicesData, value }) {
  const { t } = useTranslation()
  return (
    <div className={`${isMobile && "hidden"}`}>
      <AnimationX>
        <div className="flex flex-col bg-white">
          <ul className="flex flex-col">
            {servicesData.map((service, index) => (
              <li key={index}>
                <hr
                  className={`w-40 h-[2.5px] ${
                    value === index ? "bg-secondary-900" : "bg-gray-700"
                  }`}
                />
                <button
                  onClick={() => handleServiceClick(index)}
                  className={`flex flex-row items-center h-20 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-secondary-900 ${
                    value === index ? "text-secondary-900" : "text-gray-700"
                  }`}
                >
                  <span className="text-xl font-bold uppercase tracking-wide">
                    {t(service.title)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </AnimationX>
    </div>
  )
}

export default ServiceAside
