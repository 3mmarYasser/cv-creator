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
    return (
        <>
            <div data-btn-editor-section={true} className="absolute" style={{
                top: `${Side ? ((getElementOffset(Side).top + Side.offsetHeight) + 40) : -10000}px`,
                left: `${Side ? (getElementOffset(Side).left + Side.getBoundingClientRect().width / 2) : -10000}px`,
                transform: "translate(-50% , 0)",
                direction: "ltr"
            }}>
                <label htmlFor={`${id === "left-aria" ? "SectionsLeftModal" : "SectionsRightModal"}`}
                       className={classNames("btn ", {"btn-primary": id === "left-aria"})}>{lang === "AR" ? "قسم جديد" : "New Section"}</label>
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
