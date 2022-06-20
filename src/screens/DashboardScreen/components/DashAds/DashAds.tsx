import React from 'react';
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router";
import classNames from "classnames";
import {useSelector} from "react-redux";


const DashAds: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;

    return (
        <div className=" overflow-x-auto w-full">
            <div className="max-w-[1024px] m-auto">
                <div className="mx-3">
                    <div className="tabs overflow-x-auto flex-nowrap">
                        <NavLink to={"/dashboard/ads"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})} end>
                            {lang === "AR" ? "الرئيسية" : "Home"}
                        </NavLink>
                        <NavLink to={"/dashboard/ads/templates"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})} end>
                            {lang === "AR" ? "القوالب" : "Templates"}
                        </NavLink>
                        <NavLink to={"/dashboard/ads/examples"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})} end>
                            {lang === "AR" ? "الأمثلة" : "Examples"}
                        </NavLink>
                        <NavLink to={"/dashboard/ads/build"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})} end>
                            {lang === "AR" ? "المحرر" : "Editor"}
                        </NavLink>
                        <NavLink to={"/dashboard/ads/user"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})} end>
                            {lang === "AR" ? "المستخدم" : "User"}
                        </NavLink>
                        <NavLink to={"/dashboard/ads/profile"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})} end>
                            {lang === "AR" ? "الملف الشخصي" : "Profile"}
                        </NavLink>
                    </div>
                </div>
                <div className={classNames("mockup-window border bg-base-100 p-3", {"window-ar": lang === "AR"})}>
                    <Outlet/>
                </div>

            </div>
        </div>
    );
};

export default DashAds;
