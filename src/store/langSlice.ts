import {createSlice} from "@reduxjs/toolkit";

const initialState = {value: null as string | null}
const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        setGLang: (state, {payload}) => {
            state.value = payload
        }
    }
})
export const {setGLang} = langSlice.actions;
export default langSlice.reducer;