import React from "react"
import NewsCard from "../../common/newscard/NewsCard"
import { useSelector } from "react-redux"
import getDate from "../../../functions/getDate"

function NewsContainer() {
  const articles = useSelector((state) => state.articles)
  const lang = useSelector((state) => state.lang)
  return (
    <>
      <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start gap-10">
        {articles.map((article) => (
          <NewsCard
            key={article.id}
            id={article.id}
            title={lang === "es" ? article.title_es : article.title_en}
            image={article.image}
            content={lang === "es" ? article.content_es : article.content_en}
            date={getDate(article.createdAt, lang)}
          />
        ))}
      </div>
    </>
  )
}

export default NewsContainer
