import * as htmlToImage from 'html-to-image';
import html2canvas from "html2canvas";

const getImageFromRef = async (ref: HTMLElement | null): Promise<string> => {
    let ImageRes: string = "";
    if (ref !== null) {
        await htmlToImage.toPng(ref, {quality: 1}).then(
            (Img) => {
                ImageRes = Img
            }
        )
    }
    return ImageRes;
}

const getImage = async (ref: HTMLElement | any): Promise<string> => {
    let ImageRes: string = "";
    await html2canvas(ref, {windowWidth: 2000, logging: false}).then(canvas => {

        console.log(canvas)
        ImageRes = canvas.toDataURL("image/png");
    });
    return ImageRes
}
export {
    getImageFromRef
}