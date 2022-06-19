import React, {useRef, useEffect} from 'react';
import {removeSelection} from "../../Providers/Selection";
import {getElementOffset} from "../../Providers/getInElement";
import {getElByID} from "../../Providers/getInHTML";
import classNames from "classnames";
import {useSelector} from "react-redux";

interface Props {
    selected: HTMLElement | null
}

const ResumeMainHover: React.FC<Props> = ({selected}) => {
    const lang = ((useSelector((state: any) => state)).lang).value;

    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        ref.current?.setAttribute(`data-number-10`, "true")

    }, []);

    const ChickIsEditing: HTMLDivElement | null = document.querySelector('[data-render-page]');
    const mainContentEditor = getElByID("mainContentEditor")
    if (mainContentEditor === null) return null
    return (
        <>
            <div ref={ref} style={{
                top: `${selected ? (getElementOffset(selected).top - 40) : -10000}px`,
                left: `${selected ? (getElementOffset(selected).left + selected.getBoundingClientRect().width / 2) : -10000}px`,
                transform: "translate(-50% , 0)",
                direction: "ltr"
            }} id="resume-main-hover" className="absolute btn-group min-w-[100px] z-20">
                <button disabled={mainContentEditor?.offsetHeight > 900}
                        onClick={() => {
                            if (selected && selected?.parentElement !== undefined && selected?.parentElement !== null && selected?.innerHTML !== undefined) {
                                selected.parentElement.innerHTML += selected.outerHTML
                                removeSelection(ChickIsEditing);
                            }

                        }}
                        className={classNames("btn btn-active btn-circle ", {"btn-disabled": mainContentEditor?.offsetHeight > 900})}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <button onClick={() => {
                    removeSelection(ChickIsEditing);
                    selected?.remove();

                }} className="btn btn-circle"><span
                    className="material-symbols-outlined">delete</span>
                </button>
            </div>
            {mainContentEditor?.offsetHeight > 900 ? (
                <div className="fixed bottom-3 left-0 w-screen alert alert-error shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6"
                             fill="none"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>{lang === "AR" ? "لقد تخطيت الحد الأقصى يجب عليك مسح البعض لإكمال!" : "You have exceeded the maximum you must clear some to complete"}</span>
                    </div>
                </div>) : null}
        </>
    );
};

export default ResumeMainHover;
