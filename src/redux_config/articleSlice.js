import { createSlice } from "@reduxjs/toolkit";

const articleSlices = createSlice({
  name: "articles",
  initialState: [],
  reducers: {
    setArticles(state, action) {
      return [...action.payload];
    },
    storeArticle(state, action) {
      const { id, title_es, title_en, author, image, content_es, content_en } =
        action.payload;
      const article = {
        id,
        title_es,
        title_en,
        author,
        image,
        content_es,
        content_en,
      };
      return [...state, article];
    },
    updateArticle(state, action) {
      const { id, title_es, title_en, author, image, content_es, content_en } =
        action.payload;
      const articleUpdate = {
        id,
        title_es,
        title_en,
        author: author ? author : "MXA",
        image,
        content_es,
        content_en,
      };
      return state.map((article) =>
        article.id !== id ? article : articleUpdate
      );
    },
    deleteArticle(state, action) {
      return state.filter((article) => article.id !== action.payload);
    },
    clearArticles(state, action) {
      return (state = []);
    },
  },
});
export const {
  setArticles,
  storeArticle,
  updateArticle,
  deleteArticle,
  clearArticles,
} = articleSlices.actions;
export default articleSlices.reducer;
