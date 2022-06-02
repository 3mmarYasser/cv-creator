import React from 'react';
import RendererPage from "../RendererPage/RendererPage";
import "./Editor.scss"

interface Props{

}
const Editor :React.FC<Props> = () => {
    return (
        <div className=" content_color pt-[40px] w-[100vw]">
            <section className="flex justify-center">
                <div></div>
               <RendererPage/>
            </section>
        </div>
    );
};

export default Editor ;
