import React from "react";
import DashHeader from "./components/DashHeader/DashHeader";
import DashNav from "./components/DashNav/DashNav";
import {Outlet} from "react-router";

// import Styles from './DashboardScreen.module.scss'

interface Props {

}

const DashboardScreen: React.FC<Props> = () => {

    return (
        <div className="w-[100vw] min-h-[100vh]">
            <DashHeader/>
            <DashNav/>
            <Outlet/>
        </div>
    );
};

export default DashboardScreen;
