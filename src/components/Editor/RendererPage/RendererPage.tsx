import React,{useRef} from 'react';
import Styles from './RendererPage.module.scss'
import classNames from "classnames";
import ResumeHeader from "../Sections/ResumeHeader/ResumeHeader";
import LeftSide from "../Sections/LeftSide/LeftSide";
import RightSide from "../Sections/RightSide/RightSide";
interface Props {

}
const RendererPage :React.FC<Props> = () => {

    const rendererRef = useRef<HTMLDivElement |null>(null);

    const AllParents = (target :any) => {
        const Result = [];
        if (!target?.matches('[data-render-page]')) {
            while (target) {
                Result.unshift(target);
                target = target.parentNode;
                if (target?.matches("[data-render-page]")) {
                    break;
                }
            }
        }
        return Result
    }

    const getAllChildren = (target :any): HTMLElement[] => {
        if (target?.children?.length !== 0 || target?.children?.length !== undefined) {
            let allChildElements = [];
            for (let i = 0; i < target?.children?.length ; i++) {
                let children = getAllChildren(target?.children[i]);
                if (children) allChildElements.push(...children);
            }
            allChildElements.push(target);

            return allChildElements;
        }
        return []
    };

    const addSelection = (target :HTMLElement):void=>{
        target.classList.add("resume_Edit_selected");
        target.setAttribute("editing","true");
        rendererRef.current?.classList.add(Styles.resume_overlay);
        rendererRef.current?.setAttribute("editor","true");
    }

    const removeSelection  = ():void=>{
        const renderChildren = rendererRef.current?.children;
        if(renderChildren){
            rendererRef.current?.removeAttribute("editor");
            rendererRef.current?.classList.remove(Styles.resume_overlay);
            getAllChildren(rendererRef.current).forEach(child =>{
                if(child.matches("[editing]")){
                    child.classList.remove("resume_Edit_selected");
                    child.removeAttribute("editing");
                }
            })
        }
    }

    const handel_select =(e:any)=>{
        if(rendererRef.current?.matches("[editor]") && !e.target.matches("[editing]")) {
            removeSelection();
        }
        else if(!rendererRef.current?.matches("[editor]") && e.target.matches("[data-editable]")){
            addSelection(e.target);
        }
        AllParents(e.target).forEach(element => {
            if(element.matches("[editing]")){
                removeSelection();
            }
            else if(!rendererRef.current?.matches("[editor]") && element?.matches("[data-editable]")){
                addSelection(element);
            }

        })


    }

    return (
        <div onClick={handel_select} data-render-page={true} ref={rendererRef} className={classNames("w-[930px] bg_color h-[1330px] transition-all shadow p-[60px]",[Styles.Resume_Renderer_Page])}>
            <ResumeHeader />
            <div className="flex justify-between">
                <LeftSide/>
                <RightSide/>
            </div>
            <div>No</div>
        </div>
    );
};

export default RendererPage ;
