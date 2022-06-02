import {AllChildren} from "./getInElement";

const CheckAttr = (parent:HTMLDivElement|null , attr:string): HTMLElement |null =>{
    let res :HTMLElement |null = null
    AllChildren(parent).forEach(child =>{
        if(child.matches(attr)){
            res = child
        }
    })
    return res;
}
export {
    CheckAttr
}