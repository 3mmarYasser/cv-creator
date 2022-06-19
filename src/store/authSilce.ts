import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../api/config/Axios";
import {SignUp, User, SignIn} from "../interfaces";


export const GetUserThunk = createAsyncThunk("auth", async (data: any) => {
        console.log(data)
        try {
            return (await (Axios.get("/auth", {
                withCredentials: true,
                headers: {
                    Authentication: data.Authorization,
                    "Refresh-Token": data.Refresh
                }
            }))).data
        } catch (err: any) {
            throw new Error(err)
        }
    }
)
export const signupThunk = createAsyncThunk("auth/signup", async (data: SignUp) => {
        try {
            return (await (Axios.post("/auth/register", data))).data
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
    errMSG: {ar: "", en: ""} as { ar: string; en: string },
    isLoginIN: false as boolean
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
            state.isLoading = true
        })
        builder.addCase(signupThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false

        })
        builder.addCase(signupThunk.rejected, (state, {payload}) => {
            state.isLoading = false
            state.errMSG.en = "User Name Or Password Is Wrong";
            state.errMSG.ar = "اسم المستخدم او كلمة المرور خاطئة";
        })

        // Sign IN

        builder.addCase(signInThunk.pending, (state, {payload}) => {
        })
        builder.addCase(signInThunk.fulfilled, (state, {payload}) => {
        })
        builder.addCase(signInThunk.rejected, (state, {payload}) => {

        })

    }
})
export default authSlice.reducer;