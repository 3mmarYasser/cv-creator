import html2canvas from "html2canvas";

const getImageFromRef = async (ref: HTMLElement | any): Promise<string> => {
    let ImageRes: string = "";
    await html2canvas(ref, {windowWidth: 2000, logging: false}).then(canvas => {
        ImageRes = canvas.toDataURL("image/png");
    });
    return ImageRes
}
export {
    getImageFromRef
}