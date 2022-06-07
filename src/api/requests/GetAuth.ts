import Axios from "../config/Axios";

const GetAuth = async (): Promise<any> => {
    try {
        return (await (Axios.post("/auth/login", {
            email: "1234@gmail.com",
            password: "123456789"
        }))).data
    } catch (err: any) {
        throw new Error(err)
    }
}
export const GetUser = async (): Promise<any> => {
    try {
        return (await (Axios.get("/auth"))).data
    } catch (err: any) {
        throw new Error(err)
    }
}
export default GetAuth;