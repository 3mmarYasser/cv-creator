import React from 'react';
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router";
import classNames from "classnames";


const DashAds: React.FC = () => {
    return (
        <div className="pt-[170px] overflow-x-auto w-full">
            <div className="max-w-[1024px] m-auto">
                <div className="ml-3">
                    <div className="tabs overflow-x-auto flex-nowrap">
                        <NavLink to={"/dashboard/ads"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})}
                                 end>Home</NavLink>
                        <NavLink to={"/dashboard/ads/templates"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})}
                                 end>Templates</NavLink>
                        <NavLink to={"/dashboard/ads/examples"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})}
                                 end>Examples</NavLink>
                        <NavLink to={"/dashboard/ads/build"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})}
                                 end>Build</NavLink>
                        <NavLink to={"/dashboard/ads/user"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})}
                                 end>User</NavLink>
                        <NavLink to={"/dashboard/ads/profile"}
                                 className={({isActive}) => classNames("tab tab-lifted", {"tab-active": isActive})}
                                 end>Profile</NavLink>
                    </div>
                </div>
                <div className="mockup-window border bg-base-100 p-3">
                    <Outlet/>
                </div>

            </div>
        </div>
    );
};

export default DashAds;
