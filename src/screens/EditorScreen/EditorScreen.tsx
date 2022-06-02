import React from 'react';
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
    return (
        <div className="pt-[100px]">
            <div className=" content_color pt-[40px] w-[100vw]">
                <section className="flex justify-center">
                    {render()}
                </section>
            </div>
        </div>
    );
};

export default EditorScreen ;
