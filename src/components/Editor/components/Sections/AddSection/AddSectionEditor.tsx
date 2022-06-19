import React from 'react';
import ResumeSections from "../ResumeSections/ResumeSections";
import {getElByID} from "../../Providers/getInHTML";
import {HandelSelect, removeSelection} from "../../Providers/Selection";

interface Props {
    id: "right-aria" | "left-aria"
}

const AddSectionEditor: React.FC<Props> = ({id}) => {
    const Slide = getElByID(id);
    if (Slide === null) return null
    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-y-3 overflow-hidden lg:-mx-px p-10">
                {ResumeSections().map((section, index) => (
                    <div key={section.title + index}
                         className="w-full overflow-hidden md:my-px md:px-px lg:w-1/2 ">
                        <div className="card w-96 rounded-none ">
                            <div
                                className="w-full h-36 bg-contain bg-center bg-no-repeat flex justify-center items-center "
                                style={{backgroundImage: `url("${section.image}")`}}>
                            </div>
                            <div className="card-body items-center text-center pt-3">
                                <h2 className="card-title">{section.title}</h2>
                                <label htmlFor={`${id === "left-aria" ? "SectionsLeftModal" : "SectionsRightModal"}`}
                                       onClick={() => {
                                           Slide.innerHTML += section.HTML;
                                       }} className={"btn btn-primary"}>Add to Resume
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddSectionEditor;
