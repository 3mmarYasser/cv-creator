const scrollTOElement = (id: string) => {
    const element = document.getElementById(id);
    if (element !== null) {
        window.scroll({
            behavior: "smooth",
            top: element.offsetTop,
            left: 0
        });
    }
}
export {
    scrollTOElement
}