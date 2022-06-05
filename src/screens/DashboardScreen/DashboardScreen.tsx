import React from "react";
import DashNav from "./components/DashNav/DashNav";
import {Outlet} from "react-router";

// import Styles from './DashboardScreen.module.scss'

interface Props {

}

const DashboardScreen: React.FC<Props> = () => {

    return (
        <div className="w-[100vw] bg-base-300 min-h-[100vh]">
            <DashNav/>
            <Outlet/>
        </div>
    );
};

export default DashboardScreen;
