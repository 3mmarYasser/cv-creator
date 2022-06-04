import React, {useState} from 'react';
import StyledSwitch from "../../../../../components/StyledSwitch/StyledSwitch";
import {getElByID, getElementByAttr} from "../../Providers/getInHTML";
import StyledModal from "../../../../../components/StyledModal/StyledModal";

interface Styling {
    title: boolean
    phone: boolean
    link: boolean
    email: boolean
    location: boolean
    uppercase: boolean
    photo: boolean
    curve: boolean
}

interface Props {
    top: number
    left: number
}

const ResumeHeaderHover: React.FC<Props> = ({top, left}) => {
    const HTitle = getElByID("header-title"),
        HPhone = getElByID("h-phone"),
        HLink = getElByID("h-link"),
        HEmail = getElByID("h-email"),
        HLocation = getElByID("h-location"),
        HUppercase = getElByID("header-name"),
        HPhoto = getElByID("h-photo"),
        HCurve = getElementByAttr("[data-h-image]")

    const [styling, SetStyling] = useState<Styling>({
        title: !HTitle?.classList.contains("hidden"),
        phone: !HPhone?.classList.contains("hidden"),
        link: !HLink?.classList.contains("hidden"),
        email: !HEmail?.classList.contains("hidden"),
        location: !HLocation?.classList.contains("hidden"),
        uppercase: HUppercase ? HUppercase?.classList.contains("uppercase") : false,
        photo: !HPhoto?.classList.contains("hidden"),
        curve: HCurve ? HCurve?.classList.contains("image-curve") : false
    })
    const switchContainer = (
        <>
            <li>
                <StyledSwitch check={styling.title} toggle={(e: any) => {
                    SetStyling({...styling, title: !e.target.checked})
                    HTitle?.classList.toggle("hidden")
                }}>
                    Show title
                </StyledSwitch>
            </li>

            <li>
                <StyledSwitch check={styling.phone} toggle={(e: any) => {
                    SetStyling({...styling, phone: !e.target.checked});
                    HPhone?.classList.toggle("hidden");
                }}>
                    Show Phone
                </StyledSwitch>
            </li>

            <li>
                <StyledSwitch check={styling.link} toggle={(e: any) => {
                    SetStyling({...styling, link: !e.target.checked});
                    HLink?.classList.toggle("hidden");
                }}>
                    Show Link
                </StyledSwitch>
            </li>

            <li>
                <StyledSwitch check={styling.email} toggle={(e: any) => {
                    SetStyling({...styling, email: !e.target.checked});
                    HEmail?.classList.toggle("hidden");
                }}>
                    Show Email
                </StyledSwitch>
            </li>

            <li>
                <StyledSwitch check={styling.location} toggle={(e: any) => {
                    SetStyling({...styling, location: !e.target.checked});
                    HLocation?.classList.toggle("hidden");
                }}>
                    Show Location
                </StyledSwitch>
            </li>

            <li>
                <StyledSwitch check={styling.photo} toggle={(e: any) => {
                    SetStyling({...styling, photo: !e.target.checked});
                    HPhoto?.classList.toggle("hidden");
                }}>
                    Show Photo
                </StyledSwitch>
            </li>

            <hr/>

            <li>
                <StyledSwitch check={styling.uppercase} toggle={(e: any) => {
                    SetStyling({...styling, uppercase: !e.target.checked});
                    HUppercase?.classList.toggle("uppercase");
                }}>
                    Uppercase Name
                </StyledSwitch>
            </li>

            <li>
                <StyledSwitch check={styling.curve} toggle={(e: any) => {
                    SetStyling({...styling, curve: !e.target.checked});
                    HCurve?.classList.toggle("image-curve");
                }}>
                    Curve Image
                </StyledSwitch>
            </li>
        </>
    )
    return (
        <>
            <div id="header-hover-bar"
                 className={`hidden absolute flex justify-center items-center p-[10px] h-[40px] bg_color rounded-[20px]`}
                 style={{top: `${(top - 40)}px`, left: `${left}px`, transform: "translate(-50% , 0)"}}>

                <div className="dropdown dropdown-right setting-header-hover">
                    <label tabIndex={0} className="cursor-pointer flex"> <i
                        className="material-icons cursor-pointer">settings</i></label>
                    <ul tabIndex={0}
                        className="list-none dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {switchContainer}
                    </ul>
                </div>

                <div style={{display: "none"}} className="setting-header-hover-phone">
                    <label htmlFor="resume-header-modal" className="cursor-pointer flex">
                        <i className="material-icons cursor-pointer">settings</i>
                    </label>

                </div>
            </div>

            <input type="checkbox" id="resume-header-modal" className="modal-toggle"/>
            <label htmlFor="resume-header-modal" className="modal cursor-pointer modal-bottom">
                <label className="modal-box relative" htmlFor="">
                    <ul>
                        {switchContainer}
                    </ul>
                </label>
            </label>
        </>
    );
};

export default ResumeHeaderHover;
