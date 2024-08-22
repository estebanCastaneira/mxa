import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import NewsCard from "../../common/newscard/NewsCard"
import getDate from "../../../functions/getDate"
import searchicn from "/img/icons/searchicn.svg"
import { Reveal, AnimationXInverse, AnimationX } from "../../common/Animations"

function News() {
  const articles = useSelector((state) => state.articles)
  const lang = useSelector((state) => state.lang)
  const { t } = useTranslation()
  const [filteredArt, setFilteredArt] = useState(articles)

  const handleSearch = (e) => {
    const searchValue = e.target.value
    const filteredData = filteredArt.filter((item) => {
      return (
        item.title_es.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.content_es.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.title_en.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.title_en.toLowerCase().includes(searchValue.toLowerCase())
      )
    })
    searchValue.length > 1
      ? setFilteredArt(filteredData)
      : setFilteredArt(articles)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className="min-h-screen">
      <Reveal>
        <section className="header news-header flex flex-col gap-5 justify-end pb-28 lg:pb-14 ps-10">
          <div className="deco-white-line w-20"></div>
          <h1 className="main-title tracking-wider">{t("news")}</h1>
        </section>
      </Reveal>
      <div className="flex flex-col items-center md:flex-row md:items-stretch gap-10 my-20 mx-10 2xl:mx-32">
        <AnimationX>
          <div>
            <div className="flex justify-around mb-2">
              <input
                type="search"
                placeholder={t("search")}
                className="p-1 font-bold border border-b-2 border-b-black border-t-0 border-r-0 border-l-0"
                onChange={handleSearch}
              />
              <img
                src={searchicn}
                alt="search icon"
                className="border border-b-2 border-b-black border-t-0 border-r-0 border-l-0"
              />
            </div>
          </div>
        </AnimationX>
        <AnimationXInverse>
          <div className="flex justify-center gap-5 flex-wrap max-w-7xl">
            {filteredArt.map((article) => (
              <NewsCard
                key={article.id}
                id={article.id}
                title={lang === "es" ? article.title_es : article.title_en}
                image={article.image}
                content={
                  lang === "es" ? article.content_es : article.content_en
                }
                date={getDate(article.createdAt, lang)}
                wider={true}
              />
            ))}
          </div>
        </AnimationXInverse>
      </div>
    </main>
  )
}

export default News
