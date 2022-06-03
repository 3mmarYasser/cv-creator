import React,{useRef} from 'react';
import {Template} from "./EditorScreen.service";
import EditRender from "./components/EditRender/EditRender";
import Styles from './EditorScreen.module.scss'

interface Props{

}
const EditorScreen :React.FC<Props> = () => {
    const {data , loading ,err} = Template();
    const render = ():JSX.Element=>{
        if(loading)return <p>Loading</p>
        else if(err) return <p className="text-red-500">{err}</p>
        return <EditRender data={data} />
    }
    const editorRef = useRef <HTMLDivElement |null>(null);
    return (
        <div className="pt-[100px]">
            <div className="flex flex-col content_color pt-[40px] w-[100vw]">
                <button className="self-center ">Download</button>
                <section className="flex justify-center">
                    <div ref={editorRef}>
                        {render()}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default EditorScreen ;
