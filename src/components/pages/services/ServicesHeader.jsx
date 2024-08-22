import { Reveal } from "../../common/Animations"

function ServicesHeader({ lang }) {
  return (
    <>
      <Reveal>
        <div className="relative header services-header flex flex-col gap-5 justify-end pb-28 lg:pb-14 ps-10 z-20 2xl:ps-32">
          <div className="deco-white-line w-20"></div>
          {lang === "es" ? (
            <>
              <h1 className="main-title break-words tracking-wider">
                <span>Nuestros</span>
                <span>Servicios</span>
              </h1>
            </>
          ) : (
            <>
              {" "}
              <h1 className="main-title break-words tracking-wider">
                <span>Our</span>
                <span>Services</span>
              </h1>
            </>
          )}
        </div>
      </Reveal>
    </>
  )
}

export default ServicesHeader
