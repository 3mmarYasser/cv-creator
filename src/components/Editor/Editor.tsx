import React, {useRef, useState} from 'react';
import EditRender from "./components/EditRender/EditRender";
import {DownloadPDFByRef} from "./components/Providers/getPDF";
import {removeSelection} from "./components/Providers/Selection";
import StyledModal from "../StyledModal/StyledModal";
import {getElByID} from "./components/Providers/getInHTML";
import ResumeHeader from "./components/Sections/ResumeHeader/ResumeHeader";
import loadingIcon from "../../assets/svgs/loading.svg"
import {useSelector} from "react-redux";
import './Editor.scss'
import {getImageFromRef} from "./components/Providers/getImage";

interface Props {
    data: string;
    loading: boolean;
    err: string;
}

const Editor: React.FC<Props> = ({data, loading, err}) => {
    const lang = ((useSelector((state: any) => state)).lang).value;

    const render = (): JSX.Element => {
        if (loading) return <p>Loading</p>
        else if (err) return <EditRender data={ResumeHeader()}/>
        return <EditRender data={data}/>
    }

    const editorRef = useRef<HTMLDivElement | null>(null);
    const [image, setImage] = useState<string>(loadingIcon)
    const cleanEditor = () => {
        document.querySelectorAll("[data-btn-editor-section]").forEach(el => {
            el.classList.add("hidden")
        })
        const ChickIsEditing: HTMLDivElement | null = document.querySelector('[data-render-page]');
        if (ChickIsEditing?.matches("[editor]")) {
            removeSelection(ChickIsEditing)
            getElByID("header-hover-bar")?.classList.add("hidden");
            getElByID("resume-main-hover")?.classList.add("hidden");
        }
    }
    const DownloadCV = async (): Promise<void> => {
        cleanEditor();
        await DownloadPDFByRef(editorRef.current)
        document.querySelectorAll("[data-btn-editor-section]").forEach(el => {
            el.classList.remove("hidden")
        })
    }

    const PreviewCV = async (): Promise<void> => {
        cleanEditor();
        setImage(await getImageFromRef(editorRef.current))
        document.querySelectorAll("[data-btn-editor-section]").forEach(el => {
            el.classList.remove("hidden")
        })
    }


    return (
        <div className="pt-[100px]">
            <div className="bg-base-200 pt-[40px] w-[100vw]">

                <section className="w-[100vw] justify-center flex mb-5">
                    <button onClick={DownloadCV}
                            className="self-center btn btn-primary text-primary-content px-10 ">{lang === "AR" ? "تنزيل" : "Download"}
                    </button>
                    <label htmlFor="PreviewCV" onClick={PreviewCV}
                           className="self-center btn btn-main text-primary-content px-10 mx-7 modal-open">{lang === "AR" ? "معاينة" : "Preview"}</label>
                </section>
                <section className="flex flex-col items-center justify-center mt-[50px] overflow-hidden">
                    <div className="shadow ">
                        <div id="mobile" ref={editorRef} className="mobile">
                            {render()}
                        </div>
                    </div>
                    <StyledModal id="PreviewCV">
                        <img className="m-auto" draggable={false} onContextMenu={(e) => e.preventDefault()}
                             contextMenu="false" src={image}
                             alt={"Show PdF"}/>
                    </StyledModal>
                </section>
            </div>

        </div>
    );
};

export default Editor;
