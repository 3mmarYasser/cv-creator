import React from 'react';
import {Link} from "react-router-dom";


const DashNav: React.FC = () => {
    return (
        <div>
            <div className="navbar bg-base-200 justify-center">
                <div className="navbar-center">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link to="/dashboard/users"><span>Users</span></Link>
                        </li>
                        <li>
                            <Link to="/dashboard/templates"><span>Templates</span></Link>
                        </li>
                        <li><span>cover letter</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashNav;