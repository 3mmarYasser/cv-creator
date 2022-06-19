import React, {useState} from 'react';
import {getElByID} from "../../Providers/getInHTML";
import {getElementOffset} from "../../Providers/getInElement";
import classNames from "classnames";
import {useSelector} from "react-redux";
import AddSectionEditor from "./AddSectionEditor";
import StyledModal from "../../../../StyledModal/StyledModal";

interface Props {
    id: "right-aria" | "left-aria"
}

const AddBtnEditor: React.FC<Props> = ({id}) => {
    const lang = ((useSelector((state: any) => state)).lang).value;
    const Side = getElByID(id);
    console.log(Side?.offsetHeight);
    if (Side === null) return null
    return (
        <>
            <div data-btn-editor-section={true} className="absolute mt-7 md:mt-0" style={{
                top: `${((getElementOffset(Side).top + Side.offsetHeight) + 40)}px`,
                left: `${(getElementOffset(Side).left + Side.getBoundingClientRect().width / 2)}px`,
                transform: "translate(-50% , 0)",
                direction: "ltr"
            }}>
                <label
                    htmlFor={Side?.offsetHeight < 900 ? `${id === "left-aria" ? "SectionsLeftModal" : "SectionsRightModal"}` : ""}
                    className={classNames("btn ", {"btn-primary": id === "left-aria"}, {"btn-disabled": Side?.offsetHeight > 900})}>{lang === "AR" ? "قسم جديد" : "New Section"}</label>
            </div>
            {id === "left-aria" ?
                <StyledModal id={"SectionsLeftModal"}>
                    <AddSectionEditor id={id}/>
                </StyledModal> :
                <StyledModal id={"SectionsRightModal"}>
                    <AddSectionEditor id={id}/>
                </StyledModal>}
        </>
    );
};

export default AddBtnEditor;
