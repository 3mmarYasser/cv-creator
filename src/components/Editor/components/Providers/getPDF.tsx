import JsPDF from "jspdf";
import {getImageFromRef} from "./getImage";
const DownloadPDFByRef = async (ref:HTMLElement|null):Promise<void> =>{
        const pdf:any = new JsPDF({
                unit: 'px',
                format: [1000, 510],

        });
        const Image = await getImageFromRef(ref);
        pdf.addImage(Image, "JPEG", 0, 0);
        pdf.save(`cv.pdf`);
}

export {DownloadPDFByRef}