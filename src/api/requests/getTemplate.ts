import Axios from "../config/Axios";
const getTemplate = async ():Promise<any>=>{
    try {
      return await Axios.get("/templates/templateone.htm0l")
    }catch (e:any){
        throw new Error(e)
    }
}
export default getTemplate;