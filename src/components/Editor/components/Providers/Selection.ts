import {AllChildren, AllParents} from "./getInElement";

let setSelected: Function;

const addSelection = (target: HTMLElement, rendererRef: HTMLDivElement | null): void => {
    target.classList.add("resume_Edit_selected");
    target.setAttribute("editing", "true");
    rendererRef?.classList.add("resume_overlay");
    rendererRef?.setAttribute("editor", "true");
    setSelected(target)
}

const removeSelection = (rendererRef: HTMLDivElement | null): void => {
    const renderChildren = rendererRef?.children;
    if (renderChildren) {
        rendererRef?.removeAttribute("editor");
        rendererRef?.classList.remove("resume_overlay");
        AllChildren(rendererRef).forEach(child => {
            if (child.matches("[editing]")) {
                child.classList.remove("resume_Edit_selected");
                child.removeAttribute("editing");
                setSelected(null)
            }
        })
    }

}

const HandelSelect = (e: any, rendererRef: HTMLDivElement | null, setSelect: Function) => {
    setSelected = setSelect
    if (rendererRef?.matches("[editor]") && !e.target.matches("[editing]")) {
        removeSelection(rendererRef);

    } else if (!rendererRef?.matches("[editor]") && e.target.matches("[data-editable]")) {
        addSelection(e.target, rendererRef);
    }

    AllParents(e.target).forEach(element => {
        if (element.matches("[editing]")) {
            removeSelection(rendererRef);

        } else if (!rendererRef?.matches("[editor]") && element?.matches("[data-editable]")) {
            addSelection(element, rendererRef);
        }
    });


}
export {
    HandelSelect,
    removeSelection
}