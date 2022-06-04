import React, {useRef, useEffect} from 'react';

interface Props {
    selected: HTMLElement | null
}

const ResumeMainHover: React.FC<Props> = ({selected}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        ref.current?.setAttribute(`data-number-10`, "true")

    }, []);

    return (
        <div ref={ref} id="resume-main-hover"
             className={` absolute flex justify-center items-center p-[10px] h-[40px] bg_color rounded-[20px]`}
             style={{
                 top: `${selected ? (selected.getBoundingClientRect().top - 40) : -10000}px`,
                 left: `${selected ? (selected.getBoundingClientRect().left + selected.getBoundingClientRect().width / 2) : -10000}px`,
                 transform: "translate(-50% , 0)"
             }}>
            Hello
        </div>
    );
};

export default ResumeMainHover;
