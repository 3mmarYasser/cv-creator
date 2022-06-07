import {configureStore} from "@reduxjs/toolkit";
import auth from "./authSilce"

const store = configureStore({
    reducer: {auth}
})
export type AppDispatch = typeof store.dispatch;
export default store;