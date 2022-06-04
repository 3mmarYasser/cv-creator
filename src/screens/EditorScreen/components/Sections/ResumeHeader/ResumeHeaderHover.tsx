import React,{useState} from 'react';
import StyledSwitch from "../../../../../components/StyledSwitch/StyledSwitch";
import {getElByID} from "../../Providers/getInHTML";

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
interface Props {
    top:number
    left:number
}
const ResumeHeaderHover :React.FC<Props> = ({top , left}) => {
    const HTitle     =  getElByID("header-title"),
          HPhone     =  getElByID("h-phone"),
          HLink      =  getElByID("h-link"),
          HEmail     =  getElByID("h-email"),
          HLocation  =  getElByID("h-location"),
          HUppercase =  getElByID("header-name"),
          HPhoto     =  getElByID("h-phone"),
          HCurve     =  getElByID("image-curve");

    const [styling ,SetStyling ] = useState<Styling>({
        title: !HTitle?.classList.contains("hidden"),
        phone: !HPhone?.classList.contains("hidden"),
        link:true,
        email:true,
        location:true,
        uppercase:true,
        photo:true,
        curve:true
    })
    console.log(styling)
    return (
        <div id="header-hover-bar" className={`hidden absolute flex justify-center items-center p-[10px] h-[40px] bg_color rounded-[20px]`}  style={{top:`${(top - 40)}px`,left:`${left}px`}}>
            <div className="dropdown">
                <label tabIndex={0} className="cursor-pointer flex"> <i className="material-icons cursor-pointer">settings</i></label>
                <ul  tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">

                    <li>
                        <StyledSwitch check={styling.title} toggle={(e:any)=>{
                            SetStyling({...styling , title:!e.target.checked})
                            HTitle?.classList.toggle("hidden")
                        }}>
                            Show title
                        </StyledSwitch>
                    </li>

                    <li>
                        <StyledSwitch check={styling.phone} toggle={(e:any)=>{
                            SetStyling({...styling , phone:!e.target.checked});
                            HPhone?.classList.toggle("hidden");
                        }}>
                            Show Phone
                        </StyledSwitch>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default ResumeHeaderHover ;
