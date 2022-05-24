import React, {useEffect, useState ,useRef} from 'react';
import classNames from "classnames";
import {gsap} from "gsap";
import {NavLink} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TranslateIcon from '@mui/icons-material/Translate';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import TryIcon from '@mui/icons-material/Try';

import Styles from './Navbar.module.scss';

const Navbar :React.FC = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() :void=>{
       window.addEventListener("resize",() :void=>{
           if( menu && window.innerWidth > 1000) {
               setMenu(false)
           }
       })
       menu ? document.body.classList.add("overlay"): document.body.classList.remove("overlay");
       if(menu){
           gsap.fromTo(menuRef.current , {scale : "0"} ,{scale:"1" })
       }
   },[menu]);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const closeMenu = () :void=>{
        if(window.innerWidth <= 1000){
            gsap.fromTo(menuRef.current , {scale : "1"} ,{scale:"0"})
            setTimeout(()=>{
                gsap.to(menuRef.current , {scale:1 ,duration:0})
                setMenu(false);
            },500)
        }
    }

    return (
        <header className={classNames("bg_color t-0 l-0 flex justify-between h-[60px] fixed  p-[10px] w-[100vw] z-[98]" , [Styles.Header])}>
            <div className="flex justify-center items-center">
                <svg className={classNames("w-[60px] h-[60px] pr-[20px] z-[110]",Styles.logo)}  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 137">
                    <title>Logo</title>
                    <rect className="fls_1" x="31" width="117" height="108" rx="12"/>
                    <rect className="fls_2" x="16" y="17" width="113" height="105" rx="12"/>
                    <rect className="fls_3" y="29" width="117" height="108" rx="12"/>
                </svg>
                <h1 className="logo_font flex justify-center self-center text-3xl font-bold">CV Builder <span>.</span></h1>
            </div>

            <div ref={menuRef} className={classNames("flex",[[Styles.header_content],{[Styles.menu] : menu},{"back_drop" : menu}])}>
                <ul  className={classNames("flex")}>
                    <li  onMouseOver={handleClick}  className={classNames("flex items-center",[Styles.drop_able_menu])}>Templates <ExpandMoreIcon className="main_color w-[15px] h-[15px]"/> </li>
                    <li onClick={closeMenu}><NavLink to="/contactus">Contact Us <ContactSupportIcon  className="main_color"/></NavLink></li>
                    <li onClick={closeMenu}><NavLink to="/ar">Arabic <TranslateIcon className="main_color"/></NavLink></li>
                </ul>
                <button onClick={closeMenu}  className="main_button">Give It a Try <TryIcon className="btn_icon"/></button>
                {menu ? <button className={classNames("absolute top-[5px] right-[5px] p-[2px] rounded-full",[Styles.closeMenu])} onClick={closeMenu}><CloseIcon className={Styles.closeIcon}/></button>:null}
            </div>

            <MenuIcon className={classNames("init_icon cursor-pointer self-center", [Styles.menuIcon])} onClick={()=>{setMenu(!menu)}}/>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem
                    className="bg-amber-200"
                    onClick={()=>{handleClose();closeMenu();}}>
                    <NavLink to="templates/new">New Templates</NavLink>
                </MenuItem>
                <MenuItem   onClick={()=>{handleClose();closeMenu();}}>All Templates</MenuItem>
            </Menu>
        </header>
    );
};

export default Navbar ;
