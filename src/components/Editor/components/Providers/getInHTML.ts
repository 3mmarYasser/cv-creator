
const getElementByAttr =(Attr:string):HTMLElement|null=>{
    return document.querySelector(Attr);
}
const getElByID = (id:string):HTMLElement|null=>{
    return  document.getElementById(id)
}
export {
    getElementByAttr,
    getElByID
}