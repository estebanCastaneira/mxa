import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Reveal } from "../../common/Animations"
import ArticleAside from "./ArticleAside"
import getDate from "../../../functions/getDate"
import textFromDB from "../../../functions/textFromDB"
function Article() {
  const lang = useSelector((state) => state.lang)
  const params = useParams()
  const articles = useSelector((state) => state.articles)
  const article = articles.find((art) => art.id === Number(params.id))

  const parrafos =
    lang === "es" && article
      ? textFromDB(article.content_es)
      : textFromDB(article.content_en)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="mb-20">
      <Reveal>
        <div className="relative header article-header flex bg-center"></div>
      </Reveal>
      <div className="my-20 mx-10 flex gap-40">
        <ArticleAside articles={articles} lang={lang} />
        {article && (
          <div className="text-main-700 flex flex-col w-[75%]">
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl text-start font-bold tracking-wide">
                {lang === "es" ? article.title_es : article.title_en}
              </h1>
              <div className="font-thin mb-2">
                <p>{getDate(article.createdAt, lang)}</p>
              </div>
              <div className="deco-line w-[15%]"></div>
            </div>

            <div className="sm:text-xl leading-5 my-10 flex flex-col gap-5 tracking-wider">
              {parrafos}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Link
          to={"/"}
          onClick={() => {
            window.scrollTo(0, 0)
          }}
          className="outline-btn outline-btn-var w-72 mx-auto text-center"
        >
          Volver
        </Link>
      </div>
    </div>
  )
}

export default Article
