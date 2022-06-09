import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../api/config/Axios";
import {SignUp, User, SignIn} from "../interfaces";
import Cookies from 'universal-cookie';


export const GetUserThunk = createAsyncThunk("auth", async () => {
        try {
            return (await (Axios.get("/auth")))
        } catch (err: any) {
            throw new Error(err)
        }
    }
)
export const signupThunk = createAsyncThunk("auth/signup", async (data: SignUp) => {
        try {
            return (await (Axios.post("/auth/register", data)))
        } catch (err: any) {
            throw new Error(err)
        }
    }
)
export const signInThunk = createAsyncThunk("auth/signin", async (data: SignIn) => {
        try {
            return (await (Axios.post("/auth/login", data))).data
        } catch (err: any) {
            throw new Error(err)
        }
    }
)
const initialState = {
    user: {} as User,
    isLoading: false as boolean,
    errMSG: "" as string
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get User
        builder.addCase(GetUserThunk.pending, (state, {payload}) => {
            console.log(payload)
        })
        builder.addCase(GetUserThunk.fulfilled, (state, {payload}) => {
            console.log(payload)
        })
        builder.addCase(GetUserThunk.rejected, (state, {payload}) => {
            console.log(payload)
        })
        // Sign Up
        builder.addCase(signupThunk.pending, (state, {payload}) => {
            console.log(payload)
        })
        builder.addCase(signupThunk.fulfilled, (state, {payload}) => {
            console.log(payload)
        })
        builder.addCase(signupThunk.rejected, (state, {payload}) => {
            console.log(payload)
        })
        // Sign IN

        builder.addCase(signInThunk.pending, (state, {payload}) => {
            console.log(payload)

        })
        builder.addCase(signInThunk.fulfilled, (state, {payload}) => {
            const cookies = new Cookies();
            console.log((payload.accessTokenCookies).toLocaleString().split("="))
            document.cookie = payload.refreshTokenCookies;
            console.log(document.cookie)
            console.log(payload)
        })
        builder.addCase(signInThunk.rejected, (state, {payload}) => {
        })

    }
})
export default authSlice.reducer;