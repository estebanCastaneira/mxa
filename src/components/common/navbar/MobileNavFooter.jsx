import phonew from "/img/icons/phonewhite.svg"
import mailw from "/img/icons/mailwhite.svg"
import locationw from "/img/icons/tagwhite.svg"
import twitterw from "/img/icons/twitterwhite.svg"
import linkedInw from "/img/icons/linkedInwhite.svg"
import instagramw from "/img/icons/instagramwhite.svg"
import { motion } from "framer-motion"
function MobileNavFooter() {
  const emailAddress = "info@mxa.com.uy"
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`
  }
  return (
    <motion.div
      variants={{
        hide: {
          y: "10%",
          opacity: 0,
        },
        show: {
          y: "0%",
          opacity: 1,
          transition: {
            type: "spring",
            delay: 0.5,
            bounce: 0.2,
            duration: 0.4,
          },
        },
      }}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <div className="flex flex-wrap sm:flex-nowrap gap-10 justify-center sm:justify-between items-start sm:items-center mx-auto sm:ms-32 sm:me-0 text-sm tracking-widest text-white self-end">
        <a href="tel:+59827126550" className="flex flex-col items-center gap-2">
          <img className="w-5" src={phonew} alt="Phone" />
          <span className="ms-4 font-thin">2712 65 50</span>
        </a>
        <a
          href={`mailto:${emailAddress}`}
          onClick={handleEmailClick}
          className="flex flex-col items-center gap-2"
        >
          <img className="w-5" src={mailw} alt="Email" />
          <span className="ms-4 font-thin">info@mxa.com.uy</span>
        </a>
        <a
          href="https://maps.app.goo.gl/QALBmFq7scFwNg9y6"
          target="_blank"
          rel="noreferrer noopener"
          className="relative flex flex-col items-center gap-2 top-2"
        >
          <img className="w-5" src={locationw} alt="location" />
          <div className="ms-4 font-thin">
            <span className="">Bvr. Gral. Artigas 417 Of 701</span>
            <span className="block">Montevideo, Uruguay.</span>
          </div>
        </a>
      </div>
      <div className="flex justify-center gap-9 mt-9">
        <a href="">
          <img className="w-5" src={twitterw} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/company/mxa-capital-tax-investment-boutique/about/">
          <img className="w-5" src={linkedInw} alt="LinkedIn" />
        </a>
        <a href="">
          <img className="w-5" src={instagramw} alt="Instagram" />
        </a>
      </div>
    </motion.div>
  )
}

export default MobileNavFooter
