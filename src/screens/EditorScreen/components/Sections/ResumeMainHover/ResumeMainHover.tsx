import React, {useRef, useEffect} from 'react';

interface Props {
    top: number
    left: number
}

const ResumeMainHover: React.FC<Props> = ({top, left}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        ref.current?.setAttribute(`data-number-10`, "true")

    }, []);

    return (
        <div ref={ref} id="resume-main-hover"
             className={` absolute flex justify-center items-center p-[10px] h-[40px] bg_color rounded-[20px]`}
             style={{top: `${(top - 40)}px`, left: `${left}px`, transform: "translate(-50% , 0)"}}>
            Hello
        </div>
    );
};

export default ResumeMainHover;
