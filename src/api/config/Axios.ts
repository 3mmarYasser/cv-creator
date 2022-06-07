import axios from "axios";

const Axios = axios.create({
    baseURL: "http://129.213.115.155:3000",
    withCredentials: true
})
export default Axios;