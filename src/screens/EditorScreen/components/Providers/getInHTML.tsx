
const getElementByAttr =(Attr:string):HTMLElement|null=>{
    return document.querySelector(Attr);
}
export {
    getElementByAttr
}