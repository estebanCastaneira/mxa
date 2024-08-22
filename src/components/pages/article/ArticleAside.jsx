import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import getDate from "../../../functions/getDate"
import shuffleArray from "../../../functions/shuffleArray"
function ArticleAside({ articles, lang }) {
  const [articlesAside, setArticlesAside] = useState(articles)
  useEffect(() => {
    setArticlesAside(shuffleArray(articles))
  }, [articles])
  return (
    <aside className="hidden md:block">
      <h6 className="italic font-semibold tracking-wider">Otras Noticias</h6>
      <div className="deco-black-line mt-8"></div>
      <div>
        {articlesAside.map((article, index) => {
          if (index < 5) {
            return (
              <div key={index} className="my-10">
                <NavLink to={`/news/article/${article.id}`}>
                  <h3 className="font-bold text-lg">{article.title_es}</h3>
                </NavLink>
                <p className="tracking-wide">
                  {getDate(article.createdAt, lang)}
                </p>
                <div className="deco-black-line mt-8"></div>
              </div>
            )
          }
          return null
        })}
      </div>
    </aside>
  )
}

export default ArticleAside
