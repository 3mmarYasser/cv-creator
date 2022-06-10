import {configureStore} from "@reduxjs/toolkit";
import auth from "./authSilce"
import lang from "./langSlice"

const store = configureStore({
    reducer: {
        auth,
        lang
    }
})
export type AppDispatch = typeof store.dispatch;
export default store;