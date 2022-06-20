import JsPDF from "jspdf";
import {getImageFromRef} from "./getImage";


const DownloadPDFByRef = async (ref: HTMLElement | null): Promise<void> => {
    const pdf: any = new JsPDF({
        orientation: "p",
        format: [171.97916667, 246.0625]
    });
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();
    await getImageFromRef(ref).then(
        r => {
            pdf.addImage(r, 'JPEG', 0, 0, width, height);
            pdf.save('Your_Resume.pdf');
        }
    );

}

export {DownloadPDFByRef}