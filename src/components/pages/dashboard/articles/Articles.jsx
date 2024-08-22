import Create from "../crudIcons/Create";
import Update from "../crudIcons/Update";
import Delete from "../crudIcons/Delete";
import ArticleFormCreate from "./ArticleFormCreate";
import ArticleFormUpdate from "./ArticleFormUpdate";
import ModalDelete from "../modal/ModalDelete";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteArticle } from "../../../../redux_config/articleSlice";
import textFromDB from "../../../../functions/textFromDB";

function Articles() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const [render, setRender] = useState({ render: "", article: null });
  const handleOnClickCreate = () => {
    setRender({ render: "create" });
  };
  const handleOnClickUpdate = (article) => {
    setRender({ render: "update", article: article });
  };
  const handleOnClickDelete = (article) => {
    setRender({ render: "delete", article: article });
  };

  function renderArticleForm() {
    switch (render.render) {
      case "create":
        return <ArticleFormCreate setRender={setRender} />;
      case "update":
        return (
          <ArticleFormUpdate article={render.article} setRender={setRender} />
        );
      case "delete":
        return (
          <ModalDelete
            id={render.article.id}
            item={render.article.title_es}
            category={"Artículos"}
            dispatch={dispatch}
            deleter={deleteArticle}
            setRender={setRender}
          />
        );
      default:
        return null;
    }
  }

  return (
    <>
      <div
        className={
          render.render === "delete" ||
          render.render === "create" ||
          render.render === "update"
            ? "blur-sm opacity-25 -z-50 pointer-events-none"
            : ""
        }
      >
        <div className="flex justify-between items-center mb-5 ">
          <h2 className="font-bold underline text-xl">Articulos</h2>
          <div onClick={handleOnClickCreate}>
            <Create item={"Artículo"} />
          </div>
        </div>

        <div className="">
          <table className="w-full border border-main-900 ">
            <thead className="bg-neutral-200 font-bold text-sm">
              <tr className="border border-main-800">
                <th scope="col" className="p-2 border border-main-800">
                  Título
                </th>
                <th scope="col" className="p-2 border border-main-800 w-2/12">
                  Autor
                </th>
                <th scope="col" className="p-2 w-6/12">
                  Contenido
                </th>
                <th scope="col" className="p-2 border border-main-800 ">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="font-light text-sm">
              {articles.map((article) => (
                <tr key={article.id} className="border-main-800">
                  <th scope="row" className="p-2 border border-main-800">
                    {article.title_es}
                  </th>
                  <th scope="row" className="p-2 border border-main-800">
                    {article.author}
                  </th>
                  <th scope="row" className="p-2 border border-main-800">
                    {textFromDB(article.content_es).slice(0, 70)}...
                  </th>
                  <th scope="row" className="p-2 border border-main-800">
                    <div className="flex gap-2 justify-around">
                      <div onClick={() => handleOnClickUpdate(article)}>
                        <Update />
                      </div>
                      <div onClick={() => handleOnClickDelete(article)}>
                        <Delete />
                      </div>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="">{renderArticleForm()}</div>
    </>
  );
}

export default Articles;
