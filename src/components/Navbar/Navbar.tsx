import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import MenuIcon from '@mui/icons-material/Menu';
import Styles from './Navbar.module.scss';

const Navbar :React.FC = () => {
    const [menu, setMenu] = useState(false);
    return (
        <header className={classNames("flex justify-between h-[60px]  p-[10px] w-[100vw]" , Styles.Header)}>
            <div className="flex justify-center">
                <svg className="pr-[20px]"  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 137">
                    <title>Logo</title>
                    <rect className="fls_1" x="31" width="117" height="108" rx="12"/>
                    <rect className="fls_2" x="16" y="17" width="113" height="105" rx="12"/>
                    <rect className="fls_3" y="29" width="117" height="108" rx="12"/>
                </svg>
                <h1 className="logo_font flex justify-center self-center text-4xl font-bold ">CV Builder <span>.</span></h1>
            </div>
            <div className={classNames([[Styles.header_content],{[Styles.menu] : menu},{"back_drop" : menu}])}>
                <ul className={classNames("flex")}>
                    <li><NavLink to="/templates">Templates</NavLink></li>
                    <li><NavLink to="/contactus">Contact Us</NavLink></li>
                    <li><NavLink to="/ar">Arabic</NavLink></li>
                </ul>
                <button>Give It a Try</button>
            </div>
            <MenuIcon className={classNames("init_icon cursor-pointer", [Styles.menuIcon])} onClick={()=>{setMenu(!menu)}}/>

        </header>
    );
};

export default Navbar ;
