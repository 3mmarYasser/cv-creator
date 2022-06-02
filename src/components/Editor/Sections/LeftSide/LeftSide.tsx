import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// import Styles from './LeftSide.module.scss'
import ResumeSummary from "../ResumeSummary/ResumeSummary";
interface Props{

}
const LeftSide :React.FC<Props> = () => {
    return (
        <div className="w-[49%] mt-[10px]">
            <DndProvider backend={HTML5Backend}>
                <ResumeSummary/>
                <ResumeSummary/>
                <ResumeSummary/>
            </DndProvider>
        </div>
    );
};

export default LeftSide ;
