import {AllChildren} from "./getInElement";

const AddClassByAttr =  (parent:HTMLDivElement|null , attr:string , classStyle:string)=>{
    AllChildren(parent).forEach(child =>{
        if(child.matches(attr)){
            child.classList.add(classStyle);
        }
    })
}
const AddAttrByAttr =  (parent:HTMLDivElement|null , OldAttr:string , NewAttr:string)=>{
    AllChildren(parent).forEach(child =>{
        if(child.matches(OldAttr)){
            child.setAttribute(NewAttr , "true")
        }
    })
}

export {
    AddClassByAttr,
    AddAttrByAttr
};