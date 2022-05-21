import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../assets/svgs/Logo.svg";
import Styles from './Navbar.module.scss';
import classNames from "classnames";

const Navbar :React.FC = () => {
    return (
        <header className={classNames("flex justify-between h-[50px] pt-[10px]" , Styles.Header)}>
            <div className="logo">
                <object data={Logo} className="w-[20px] h-[20px]"/>
            </div>
            <ul>
                <li>
                    <NavLink to="/">Page 1</NavLink>
                    <NavLink to="/">Page 2</NavLink>
                    <NavLink to="/">Page 3</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Navbar ;
