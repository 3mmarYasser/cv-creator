import React, {useRef, useEffect, useState} from 'react';
import classNames from "classnames";
import {HandelSelect} from "../Providers/Selection";
import {AddAttrByAttr, AddClassByAttr} from "../Providers/AddInReturn";
import UserImage from "../../../../assets/svgs/user.svg"
import {CheckAttr} from "../Providers/CheckIn";
import uploadImage from "../Providers/uploadImage";
import {getElementByAttr, getElByID} from "../Providers/getInHTML";
import ResumeHeaderHover from "../Sections/ResumeHeader/ResumeHeaderHover";
import ResumeMainHover from "../Sections/ResumeMainHover/ResumeMainHover";
import AddBtnEditor from "../Sections/AddSection/AddBtnEditor";
import './EditRender.scss'


interface Props {
    data: string
}

const EditRender: React.FC<Props> = ({data}) => {
    const [image, setImage] = useState(UserImage)
    const rendererRef = useRef<HTMLDivElement | null>(null);
    const [builtInData, setBuiltInData] = useState<Array<JSX.Element>>([])
    const [selected, setSelected] = useState<HTMLElement | null>(null)

    useEffect(() => {
        const inputUpload = document.createElement('input');
        inputUpload.type = "file";
        inputUpload.id = "ResumeImageUpload"
        inputUpload.accept = "image/*";
        inputUpload.multiple = false;
        inputUpload.name = "ResumeProfileImage";
        inputUpload.onchange = (e) => {
            uploadImage(e, setImage);
        }
        inputUpload.style.display = "none";
        const labelUpload = document.createElement('label');
        labelUpload.htmlFor = "ResumeImageUpload";
        labelUpload.innerHTML = ` <i class="material-icons solid-main">cloud_upload</i>`;

        AddClassByAttr(rendererRef.current, "[data-content-edit]", "editing_Text");
        AddAttrByAttr(rendererRef.current, "[data-content-edit]", "contentEditable");
        AddClassByAttr(rendererRef.current, "[data-resume-header]", "resume-header");
        AddClassByAttr(rendererRef.current, "[data-h-right]", "resume-header-right");
        AddClassByAttr(rendererRef.current, "[data-h-left]", "resume-header-left");
        AddClassByAttr(rendererRef.current, "[data-h-image]", "resume-header-Image");
        const resumeImage = CheckAttr(rendererRef.current, "[data-h-image]");
        if (resumeImage !== null) {
            if (resumeImage.childElementCount < 2) {
                resumeImage.appendChild(inputUpload)
                resumeImage.appendChild(labelUpload)
            }
            resumeImage.style.backgroundImage = `url(${image})`;
        }

    }, [image]);
    useEffect(() => {
        const ResumeHeader = getElementByAttr("[data-resume-header]")
        let headerHoverBar = getElByID("header-hover-bar");
        if (ResumeHeader !== null) {
            if (headerHoverBar === null) {
                setBuiltInData([...builtInData,
                    <ResumeHeaderHover key={"header-nav"} top={ResumeHeader.getBoundingClientRect().top}
                                       left={(ResumeHeader.getBoundingClientRect().left + ResumeHeader.getBoundingClientRect().width / 2)}/>])
                headerHoverBar = getElByID("header-hover-bar");
            }

            selected && selected?.matches("[data-resume-header]") ? headerHoverBar?.classList.remove("hidden") : headerHoverBar?.classList.add("hidden");
        }

        const rangeInputs = document.querySelectorAll('input[type="range"]')
        if (rangeInputs !== null) {
            rangeInputs.forEach(input => {
                if (input !== null) {
                    input.addEventListener("input", (e) => {
                        // @ts-ignore
                        const min = e.target.min
                        // @ts-ignore
                        const max = e.target.max
                        // @ts-ignore
                        const val = e.target.value
                        // @ts-ignore
                        e.target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
                    })
                }
            })
        }
    }, [builtInData, selected]);

    return (
        <>
            <div onClick={(e) => HandelSelect(e, rendererRef.current, setSelected)} data-render-page={true}
                 style={{direction: "ltr"}}
                 ref={rendererRef}
                 className={classNames("w-[930px] bg_color h-[1330px] transition-all render-resume-page")}
                 dangerouslySetInnerHTML={{__html: data}}/>
            <div>
                {builtInData}
                {selected && !selected?.matches("[data-resume-header]") && selected.matches("[data-editable]") ?
                    <ResumeMainHover selected={selected}/> : null}
                <AddBtnEditor id="left-aria"/>
                <AddBtnEditor id="right-aria"/>
            </div>
        </>
    );
};

export default EditRender;
