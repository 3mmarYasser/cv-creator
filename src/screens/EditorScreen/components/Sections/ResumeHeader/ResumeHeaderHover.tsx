import React,{useState} from 'react';
import StyledSwitch from "../../../../../components/StyledSwitch/StyledSwitch";

interface Styling{
    title:boolean
    phone:boolean
    link:boolean
    email:boolean
    location:boolean
    uppercase:boolean
    photo:boolean
    curve:boolean
}
const ResumeHeaderHover :React.FC = () => {

    const [styling ,SetStyling ] = useState<Styling>({
        title:true,
        phone:true,
        link:true,
        email:true,
        location:true,
        uppercase:true,
        photo:true,
        curve:true
    })
    console.log(styling)
    return (
        <div data-header-hover-bar={true} className="hidden absolute flex justify-center items-center top-[-40px] left-[50%] p-[10px] h-[40px] bg_color rounded-[20px]">
            <div className="dropdown">
                <label tabIndex={0} className="cursor-pointer flex"> <i className="material-icons cursor-pointer">settings</i></label>
                <ul  tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <StyledSwitch check={styling.title} toggle={(e:any)=>{
                            SetStyling({...styling , title:!e.target.check})
                        }}>
                            Show title
                        </StyledSwitch>
                    </li>
                    <li>
                        <StyledSwitch check={styling.photo} toggle={(e:any)=>{e.target.check = !e.target.check }}>
                            Show Phone
                        </StyledSwitch>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ResumeHeaderHover ;
