import axios from "axios";

const Axios = axios.create({
    baseURL: "https://api.new-level.codes:3000",
    withCredentials: true
})
export default Axios;