import React from 'react';
import Styles from './ResumeSummary.module.scss'
import classNames from "classnames";
interface Props{

}
const ResumeSummary :React.FC<Props> = () => {
    return (
        <div className={classNames("w-[100%] p-[8px] rounded-[8px] relative flex justify-between")} data-editable={true}>
            <p className={classNames("editing_Text mb-[5px]  text-5xl font-bold")} placeholder="Your Name" suppressContentEditableWarning={true} contentEditable="true" ></p>
        </div>
    );
};

export default ResumeSummary ;
