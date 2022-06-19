import axios from "axios";

const getTemplate = async (): Promise<any> => {
    try {
        return await axios.get("http://localhost:5000/templates/templateone.html")
    } catch (e: any) {
        throw new Error(e)
    }
}
export default getTemplate;