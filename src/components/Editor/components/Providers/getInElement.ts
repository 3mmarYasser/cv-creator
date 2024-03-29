const AllParents = (target: any) => {
    const Result = [];
    if (!target?.matches('[data-render-page]')) {
        while (target) {
            Result.push(target);
            target = target.parentNode;
            if (target?.matches("[data-render-page]")) {
                break;
            }
        }
    }
    return Result
}

const AllChildren = (target: any): HTMLElement[] => {
    if (target?.children?.length !== 0 || target?.children?.length !== undefined) {
        let allChildElements = [];
        for (let i = 0; i < target?.children?.length; i++) {
            let children = AllChildren(target?.children[i]);
            if (children) allChildElements.push(...children);
        }
        allChildElements.push(target);

        return allChildElements;
    }
    return []
};
const getElementOffset = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
export {
    AllParents,
    AllChildren,
    getElementOffset
}