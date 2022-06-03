import React,{useRef} from 'react';
import ReactDOMServer from "react-dom/server";
import {Template} from "./EditorScreen.service";
import EditRender from "./components/EditRender/EditRender";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Styles from './EditorScreen.module.scss'

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

    const DownloadPDF = ()=>{
        const input:any = editorRef.current;
        html2canvas(input).then(canvas => {
            const imgData = canvas.toDataURL("image/svg");
            
            const pdf:any = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: [1330, 940]
            });
            pdf.addImage(imgData, "svg", 0, 0);
            pdf.save("cv.pdf");
        });

    }
    return (
        <div className="pt-[100px]">
            <div className="content_color pt-[40px] w-[100vw]">
                <section className="w-[100vw] justify-center flex mb-5">
                    <button  onClick={DownloadPDF} className="self-center btn btn-primary text-primary-content px-10">Download</button>
                </section>
                <section className="flex justify-center">
                    <div ref={editorRef}>
                        {render()}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default EditorScreen ;
