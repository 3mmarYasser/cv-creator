import React,{useRef , useState} from 'react';
import {Template} from "./EditorScreen.service";
import EditRender from "./components/EditRender/EditRender";
import {DownloadPDFByRef} from "./components/Providers/getPDF";
import {removeSelection} from "./components/Providers/Selection";
import {getImageFromRef} from "./components/Providers/getImage";
import StyledModal from "../../components/StyledModal/StyledModal";
// import Styles from './EditorScreen.module.scss'

interface Props{

}
const EditorScreen :React.FC<Props> = () => {

    const {data , loading ,err} = Template();
    const render = ():JSX.Element=>{
        if(loading)return <p>Loading</p>
        else if(err) return <p className="text-red-500">{err}</p>
        return <EditRender data={data} />
    }
    const editorRef = useRef <HTMLDivElement |null>(null);
    const [image , setImage]=useState<string>()
    const DownloadCV = async ():Promise<void>=>{
        const ChickIsEditing:HTMLDivElement|null = document.querySelector('[data-render-page]');
        if(ChickIsEditing?.matches("[editor]")){
            removeSelection(ChickIsEditing)
        }
        await DownloadPDFByRef(editorRef.current)
    }
    const PreviewCV = async ():Promise<void>=>{
        const ChickIsEditing:HTMLDivElement|null = document.querySelector('[data-render-page]');
        if(ChickIsEditing?.matches("[editor]")){
            removeSelection(ChickIsEditing)
        }
        setImage(await  getImageFromRef(editorRef.current))

    }

    return (
        <div className="pt-[100px]">
            <div className="bg-base-200 pt-[40px] w-[100vw]">

                <section className="w-[100vw] justify-center flex mb-5">
                    <button onClick={DownloadCV}   className="self-center btn btn-primary text-primary-content px-10 ">Download</button>
                    <label  htmlFor="PreviewCV" onClick={PreviewCV} className="self-center btn btn-main text-primary-content px-10 ml-[20px] modal-open">Preview</label>
                </section>
                <section className="flex flex-col items-center justify-center">
                   <div className="shadow">
                       <div ref={editorRef} >
                           {render()}
                       </div>
                   </div>
                    <StyledModal id="PreviewCV">
                        <img draggable={false} onContextMenu={(e)=>e.preventDefault()} contextMenu="false"  src={image}  alt={"Show PdF"}/>
                    </StyledModal>
                </section>
            </div>

        </div>
    );
};

export default EditorScreen ;
