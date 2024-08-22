import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import articleReducer from "./articleSlice"
import staffReducer from "./staffSlice"
import langReducer from "./langSlice"
import adminReducer from "./adminSlice"
import serviceReducer from "./serviceSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  articles: articleReducer,
  staff: staffReducer,
  lang: langReducer,
  admin: adminReducer,
  services: serviceReducer,
})

export default rootReducer
