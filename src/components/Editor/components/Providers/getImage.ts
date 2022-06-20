import * as htmlToImage from 'html-to-image';
import {getElementByAttr} from "./getInHTML";

const getImageFromRef = async (ref: HTMLElement | null): Promise<string> => {
    const mobile: HTMLElement | null = document.getElementById("mobile")
    const editor: HTMLElement | null = getElementByAttr("[data-Editor]")
    if (mobile !== null && editor !== null) {
        mobile.classList.remove("mobile")
        editor.style.width = "930px"
    }
    let ImageRes: string = "";
    if (ref !== null) {
        await htmlToImage.toJpeg(ref, {
            quality: 1,
            canvasWidth: 930,
            canvasHeight: 1330,
            skipAutoScale: true,
            pixelRatio: 93 / 133,
            width: 930,
            height: 1330,
            backgroundColor: "white",
            style: {
                overflow: "hidden",
                minWidth: "930px",
                minHeight: "1330px",
                width: "930px",
                height: "1330px",
                position: "fixed",
                top: "0",
                left: "0",
                display: "block",
            }
        }).then(
            (Img) => {
                ImageRes = Img
            }
        )
    }
    if (mobile !== null && editor !== null) {
        mobile.classList.add("mobile");
        editor.style.width = "100%"
    }
    return ImageRes;
}


export {
    getImageFromRef
}