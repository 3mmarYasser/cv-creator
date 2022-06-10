import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Page404: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;

    return (
        <div className="w-screen h-screen flex justify-center items-center text-6xl bg-base-300 flex-col">
            <b className="whitespace-nowrap uppercase animate-bounce flex flex-col items-center justify-center "><h1
                className="text-8xl ">4<span className="text-primary">0</span>4</h1>
                <p><span className="text-primary">N</span>ot <span className="text-primary">f</span>ound</p>
            </b>

            <Link to="/"
                  className="btn btn-primary btn-outline">{lang === "AR" ? "العودة للرئيسية" : "Back To Home"}</Link>
        </div>
    );
};

export default Page404;
