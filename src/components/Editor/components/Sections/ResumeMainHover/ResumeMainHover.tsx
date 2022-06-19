import React, {useRef, useEffect} from 'react';
import {removeSelection} from "../../Providers/Selection";
import {getElementOffset} from "../../Providers/getInElement";

interface Props {
    selected: HTMLElement | null
}

const ResumeMainHover: React.FC<Props> = ({selected}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        ref.current?.setAttribute(`data-number-10`, "true")

    }, []);

    const ChickIsEditing: HTMLDivElement | null = document.querySelector('[data-render-page]');

    return (
        <div ref={ref} style={{
            top: `${selected ? (getElementOffset(selected).top - 40) : -10000}px`,
            left: `${selected ? (getElementOffset(selected).left + selected.getBoundingClientRect().width / 2) : -10000}px`,
            transform: "translate(-50% , 0)",
            direction: "ltr"
        }} id="resume-main-hover" className="absolute btn-group">
            <button
                onClick={() => {
                    if (selected && selected?.parentElement !== undefined && selected?.parentElement !== null && selected?.innerHTML !== undefined) {
                        selected.parentElement.innerHTML += selected.outerHTML
                        removeSelection(ChickIsEditing);

                    }

                }}
                className="btn btn-active btn-circle"><span
                className="material-symbols-outlined">add</span>
            </button>
            <button onClick={() => {
                removeSelection(ChickIsEditing);
                selected?.remove();

            }} className="btn btn-circle"><span
                className="material-symbols-outlined">delete</span>
            </button>
        </div>
    );
};

export default ResumeMainHover;
