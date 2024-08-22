import { useTranslation } from "react-i18next"
import phone from "/img/icons/phone.svg"
import phonew from "/img/icons/phonewhite.svg"
import mail from "/img/icons/mail.svg"
import mailw from "/img/icons/mailwhite.svg"
import location from "/img/icons/tag.svg"
import locationw from "/img/icons/tagwhite.svg"
import twitter from "/img/icons/twitter.svg"
import twitterw from "/img/icons/twitterwhite.svg"
import linkedIn from "/img/icons/linkedIn.svg"
import linkedInw from "/img/icons/linkedInwhite.svg"
import instagram from "/img/icons/instagram.svg"
import instagramw from "/img/icons/instagramwhite.svg"

function Footer({ white, aboutUs }) {
  const { t } = useTranslation()

  const emailAddress = "info@mxa.com.uy"

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`
  }

  return (
    <footer
      className={`flex flex-col justify-center items-center ${
        white ? "bg-white" : "bg-secondary-900"
      } ${aboutUs ? "pb-12 md:pt-28" : "py-12"}`}
    >
      <div className={`${white ? "text-main-700" : "text-white"}`}>
        <h3 className="font-bold text-xl  lg:text-4xl tracking-widest text-center">
          {t("contact")}
        </h3>
        <div
          className={`w-28 my-9 mx-auto text-center ${
            white ? "deco-line" : "deco-white-thin"
          }`}
        ></div>
      </div>
      <div
        className={`flex flex-col sm:flex-row sm:ms-20 lg:ms-36 gap-10 sm:gap-20 text-xs lg:text-xl items-start sm:items-center justify-center tracking-widest  ${
          white ? "text-main-700" : "text-white"
        }`}
      >
        <a href="tel:+59827126550" className="flex ml-[2.1rem] sm:ml-0">
          <img
            className="w-5 lg:w-7"
            src={white ? phone : phonew}
            alt="Phone"
          />
          <span className="ms-4 whitespace-nowrap">(+598) 2712 65 50</span>
        </a>
        <a
          href={`mailto:${emailAddress}`}
          onClick={handleEmailClick}
          className="flex ml-[2.1rem] sm:ml-0"
        >
          <img className="w-5 lg:w-7" src={white ? mail : mailw} alt="Email" />
          <span className="ms-4">info@mxa.com.uy</span>
        </a>
        <a
          href="https://maps.app.goo.gl/QALBmFq7scFwNg9y6"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-start ml-[2.1rem] lg:mt-6 sm:ml-0"
        >
          <img
            className="w-5 lg:w-7"
            src={white ? location : locationw}
            alt="location"
          />
          <span className="ms-4">
            Bvr. Gral. Artigas 417 Of 701 <br />
            Montevideo, Uruguay.
          </span>
        </a>
      </div>
      <div className="flex justify-center gap-9 my-9">
        <a href="">
          <img
            className="w-5 lg:w-7"
            src={white ? twitter : twitterw}
            alt="Twitter"
          />
        </a>
        <a href="https://www.linkedin.com/company/mxa-capital-tax-investment-boutique/about/">
          <img
            className="w-5 lg:w-7"
            src={white ? linkedIn : linkedInw}
            alt="LinkedIn"
          />
        </a>
        <a href="">
          <img
            className="w-5 lg:w-7"
            src={white ? instagram : instagramw}
            alt="Instagram"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
