import React from 'react';
import Styles from './RightSide.module.scss'
import ResumeSummary from "../ResumeSummary/ResumeSummary";
interface Props{

}
const RightSide :React.FC<Props> = () => {
    return (
        <div className="w-[49%] mt-[10px]">
            <ResumeSummary/>
        </div>
    );
};

export default RightSide ;
