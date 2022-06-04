import React, {ReactNode} from 'react';
interface Props{
    children:ReactNode
    check : boolean
    toggle :Function
}
const StyledSwitch :React.FC<Props> = ({children,check,toggle}) => {
    return (
            <div className="form-control w-[100%]">
                <label className="label cursor-pointer flex w-[100%]">
                    <span className="label-text ">{children}</span>
                    <input onChange={(e)=> {
                        e.target.checked = !e.target.checked;
                        toggle(e)
                    }} type="checkbox" className="toggle toggle-primary" checked={check}/>
                </label>
            </div>
    );
};

export default StyledSwitch ;
