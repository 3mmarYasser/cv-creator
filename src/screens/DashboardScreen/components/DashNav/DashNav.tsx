import React from 'react';
import {Link} from "react-router-dom";


const DashNav: React.FC = () => {
    return (
        <div>
            <div className="navbar overflow-x-auto hiddenScrollBar z-20 fixed mt-[90px] justify-center">
                <div className="navbar-center pl-[120px] md:pl-0">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/dashboard"><span>Dashboard</span></Link></li>
                        <li><Link to="/dashboard/users"><span>Users</span></Link></li>
                        <li><Link to="/dashboard/templates"><span>Templates</span></Link></li>
                        <li><Link to="/dashboard/cover-letter"><span>Cover Letter</span></Link></li>
                        <li><Link to="/dashboard/ads"><span>Ads</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashNav;
