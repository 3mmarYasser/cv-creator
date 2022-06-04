import React,{useRef, useEffect ,useState} from 'react';
import ReactDOMServer from "react-dom/server"
import classNames from "classnames";
import {HandelSelect} from "../Providers/Selection";
import {AddAttrByAttr, AddClassByAttr} from "../Providers/AddInReturn";
import UserImage from "../../../../assets/svgs/user.svg"
import {CheckAttr} from "../Providers/CheckIn";
import uploadImage from "../Providers/uploadImage";
import  './EditRender.scss'
import {getElementByAttr} from "../Providers/getInHTML";
import ResumeHeaderHover from "../Sections/ResumeHeader/ResumeHeaderHover";


interface Props {
    data:string
}
const EditRender :React.FC<Props> = ({data}) => {
    const [image , setImage] = useState(UserImage)

    const rendererRef = useRef<HTMLDivElement |null>(null);
    useEffect(() => {
        const inputUpload = document.createElement('input');
        inputUpload.type = "file";
        inputUpload.id  = "ResumeImageUpload"
        inputUpload.accept = "image/*";
        inputUpload.multiple = false;
        inputUpload.name = "ResumeProfileImage";
        inputUpload.onchange = (e)=>{uploadImage(e , setImage);}
        inputUpload.style.display = "none";
        const labelUpload = document.createElement('label');
        labelUpload.htmlFor = "ResumeImageUpload";
        labelUpload.innerHTML = ` <i class="material-icons solid-main">cloud_upload</i>`;

       AddClassByAttr(rendererRef.current , "[data-content-edit]", "editing_Text");
        AddAttrByAttr(rendererRef.current , "[data-content-edit]","contentEditable");
        AddClassByAttr(rendererRef.current , "[data-resume-header]","resume-header");
        AddClassByAttr(rendererRef.current , "[data-h-right]","resume-header-right");
        AddClassByAttr(rendererRef.current , "[data-h-left]","resume-header-left");
        AddClassByAttr(rendererRef.current , "[data-h-image]","resume-header-Image");
        const resumeImage = CheckAttr(rendererRef.current , "[data-h-image]");
        console.log(resumeImage)
        if(resumeImage !== null){
         if(resumeImage.childElementCount < 2){
                resumeImage.appendChild(inputUpload)
                resumeImage.appendChild(labelUpload)
            }
            resumeImage.style.backgroundImage = `url(${image})`;
        }

    }, [image]);
    useEffect(() => {
        const ResumeHeader = getElementByAttr("[data-resume-header]")
        let headerHover = getElementByAttr("[data-header-hover-bar]")
        if(ResumeHeader !== null){

            if(headerHover === null || headerHover === undefined){
                headerHover = getElementByAttr("[data-header-hover-bar]")
            }
          ResumeHeader.onmouseenter = ()=> {
              if(headerHover !== null){
                  headerHover.style.display = "flex";
              }
          }
            ResumeHeader.onmouseleave = ()=> {
                if(headerHover !== null){
                    // headerHover.style.display = "none";
                }
            }
        }

    }, []);



    return (
        <div onClick={(e)=>HandelSelect(e , rendererRef.current)} data-render-page={true} ref={rendererRef} className={classNames("w-[930px] bg_color h-[1330px] transition-all p-[60px] render-resume-page" )} dangerouslySetInnerHTML={{__html:data}}>
        </div>
    );
};

export default EditRender ;
