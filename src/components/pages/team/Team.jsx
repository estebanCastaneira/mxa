import { useEffect } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import linkedIn from "/img/icons/linkedIn.svg"
import { Reveal } from "../../common/Animations"
function Team() {
  const staff = useSelector((state) => state.staff)
  const lang = useSelector((state) => state.lang)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <main className="flex flex-col">
        <div className="team-header header flex flex-col gap-5 justify-end pb-28 lg:pb-14 ps-10 2xl:ps-32">
          <div className="deco-white-line w-20"></div>
          <h1 className="main-title break-words tracking-wider">
            {lang === "es" ? (
              <>
                <span>Nuestro</span>
                <span>Equipo</span>
              </>
            ) : (
              <span>Our Team</span>
            )}
          </h1>
        </div>
        <div className="mx-auto sm:mx-20 mt-20">
          <div className="teams-grid flex flex-wrap w-full lg:grid lg:grid-cols-3 justify-center max-h-[100vh] overflow-auto">
            {staff[0].map((staffMemeber, index) => (
              <>
                <>
                  {index + 1 === staff[0].length && (
                    <div className="col-span-1 hidden lg:block"></div>
                  )}
                </>
                <Reveal key={staffMemeber.id} styles="grid">
                  <div className="team-div flex flex-col justify-center items-center text-center my-10 gap-6">
                    <img
                      className="rounded-full w-72 h-72 object-cover object-top"
                      src={`/${staffMemeber.image}`}
                      alt="Nombre"
                    />
                    <p className="font-bold text-2xl tracking-widest text-black ">
                      {staffMemeber.firstname + " " + staffMemeber.lastname}
                    </p>
                    <div className="deco-black-line w-40 mx-auto hidden sm:block"></div>
                    <p>
                      {lang === "es"
                        ? staffMemeber.position_es.toUpperCase()
                        : staffMemeber.position_en.toUpperCase()}
                    </p>
                    <div>
                      <a href={staffMemeber.linkedin}>
                        <img src={linkedIn} alt="linkedin icon" />
                      </a>
                    </div>
                  </div>
                  {index + 1 !== staff[0].length && (
                    <>
                      <div className="deco-line mt-10 w-full block sm:hidden"></div>
                    </>
                  )}
                </Reveal>
                <>
                  {index + 1 === staff[0].length && (
                    <div className="col-span-1 hidden lg:block"></div>
                  )}
                </>
              </>
            ))}
            {staff[1].map((staffMemeber, index) => (
              <Reveal key={staffMemeber.id}>
                <div className="team-div flex flex-col justify-center items-center text-center my-10  gap-6">
                  <img
                    className="rounded-full w-72 h-72 object-cover object-top"
                    src={`/${staffMemeber.image}`}
                    alt="Nombre"
                  />
                  <p className="font-bold text-2xl tracking-widest">
                    {staffMemeber.firstname + " " + staffMemeber.lastname}
                  </p>
                  <div className="deco-black-line w-40 mx-auto hidden sm:block"></div>
                  <p>
                    {lang === "es"
                      ? staffMemeber.position_es.toUpperCase()
                      : staffMemeber.position_en.toUpperCase()}
                  </p>
                  <div>
                    <a href={staffMemeber.linkedin}>
                      <img src={linkedIn} alt="linkedin icon" />
                    </a>
                  </div>
                </div>
                {index + 1 !== staff[1].length && (
                  <>
                    <div className="deco-line mt-10 w-full block sm:hidden"></div>
                  </>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Team
