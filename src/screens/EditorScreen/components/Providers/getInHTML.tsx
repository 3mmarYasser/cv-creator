
const getElementByAttr =(Attr:string):HTMLElement|null=>{
    return document.querySelector(Attr);
}
const getElementByID = (id:string):HTMLElement|null=>{
    return  document.getElementById(id)
}
export {
    getElementByAttr,
    getElementByID
}