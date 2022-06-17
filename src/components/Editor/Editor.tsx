import React, {useRef, useState} from 'react';
import EditRender from "./components/EditRender/EditRender";
import {DownloadPDFByRef} from "./components/Providers/getPDF";
import {removeSelection} from "./components/Providers/Selection";
import {getImageFromRef} from "./components/Providers/getImage";
import StyledModal from "../StyledModal/StyledModal";
import {getElByID} from "./components/Providers/getInHTML";
import ResumeHeader from "./components/Sections/ResumeHeader/ResumeHeader";
import loadingIcon from "../../assets/svgs/loading.svg"
import './Editor.scss'

interface Props {
    data: string;
    loading: boolean;
    err: string;
}

const Editor: React.FC<Props> = ({data, loading, err}) => {

    const render = (): JSX.Element => {
        if (loading) return <p>Loading</p>
        else if (err) return <EditRender data={ResumeHeader()}/>
        return <EditRender data={data}/>
    }

    const editorRef = useRef<HTMLDivElement | null>(null);
    const [image, setImage] = useState<string>(loadingIcon)
    const DownloadCV = async (): Promise<void> => {

        const ChickIsEditing: HTMLDivElement | null = document.querySelector('[data-render-page]');
        if (ChickIsEditing?.matches("[editor]")) {
            removeSelection(ChickIsEditing)
            getElByID("header-hover-bar")?.classList.add("hidden");
        }
        await DownloadPDFByRef(editorRef.current)
    }

    const PreviewCV = async (): Promise<void> => {
        const ChickIsEditing: HTMLDivElement | null = document.querySelector('[data-render-page]');
        if (ChickIsEditing?.matches("[editor]")) {
            removeSelection(ChickIsEditing)
            getElByID("header-hover-bar")?.classList.add("hidden");
        }
        setImage(await getImageFromRef(editorRef.current))

    }

    return (
        <div className="pt-[100px]">
            <div className="bg-base-200 pt-[40px] w-[100vw]">

                <section className="w-[100vw] justify-center flex mb-5">
                    <button onClick={DownloadCV}
                            className="self-center btn btn-primary text-primary-content px-10 ">Download
                    </button>
                    <label htmlFor="PreviewCV" onClick={PreviewCV}
                           className="self-center btn btn-main text-primary-content px-10 ml-[20px] modal-open">Preview</label>
                </section>
                <section className="flex flex-col items-center justify-center mt-[50px]">
                    <div className="shadow">
                        <div ref={editorRef}>
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
