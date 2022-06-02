import React,{useRef, useEffect} from 'react';
import classNames from "classnames";
import  './EditRender.scss'
import {HandelSelect} from "../Providers/Selection";
import {AddAttrByAttr, AddClassByAttr} from "../Providers/AddInReturn";

interface Props {
    data:string
}
const EditRender :React.FC<Props> = ({data}) => {

    const rendererRef = useRef<HTMLDivElement |null>(null);
    useEffect(() => {
        AddClassByAttr(rendererRef.current , "[data-content-edit]", "editing_Text");
        AddAttrByAttr(rendererRef.current , "[data-content-edit]","contentEditable");
    }, []);


    return (
        <div onClick={(e)=>HandelSelect(e , rendererRef.current)} data-render-page={true} ref={rendererRef} className={classNames("w-[930px] bg_color h-[1330px] transition-all shadow p-[60px]")} dangerouslySetInnerHTML={{__html:data}}>
        </div>
    );
};

export default EditRender ;
