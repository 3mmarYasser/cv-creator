import React from 'react';
import classNames from "classnames";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import amazonLogo from "../../../assets/images/Amazon_logo.svg.png";

const logos = [amazonLogo]

const ResumeExamples: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;

    return (
        <div className="pt-[140px] w-screen min-h-screen bg-base-200 p-5">
            <div className="container w-full flex flex-col md:flex-row mx-auto justify-around  ">
                <div
                    className={classNames("md:w-[50%]  flex flex-col justify-center")}>
                   <span className="uppercase opacity-80">
                       {lang === "AR" ? "أمثلة السيرة الذاتية" : "Resume Examples"}
                   </span>
                    <div className="text-sm breadcrumbs opacity-60 flex  mt-2">
                        <ul>
                            <li><Link to={"/"}>{lang === "AR" ? "الرئيسية" : "Home"}</Link></li>
                            <li><span>{lang === "AR" ? "امثلة على القوالب" : "Resume Examples"}</span></li>
                        </ul>
                    </div>
                    <p className=" md:text-2xl leading-[1em] my-4  font-bold">
                        {lang === "AR" ? "ارفع مستوى سيرتك الذاتية مع أمثلة السيرة الذاتية الاحترافية هذه. ستساعدك عينات السيرة الذاتية هذه التي يزيد عددها عن 1070 على إطلاق العنان للإمكانات الكاملة لحياتك المهنية." : "Level up your resume with these professional resume examples. These 1070+ resume samples will help you unleash the full potential of your career."}
                    </p>
                    <div>
                        <Link to="/resume/build" className="btn btn-primary text-primary-content">
                            {lang === "AR" ? "بناء سيرتي الذاتية الآن" : "Build my resume now"}
                        </Link>
                    </div>
                    <div className="mt-5">
                        <div className="max-w-[250px]">
                            <img
                                src={"https://cdn.enhancv.com/images?url=/_next/static/images/rating.u3IEt.webp&width=1920"}
                                alt={""}/>
                        </div>
                        <div className="opacity-75 mt-1.5">
                            <p>{lang === "AR" ? "شارك 1،195 عميلًا سعيدًا تجربتهم." : "1,195 happy customers shared their experience."}</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div>
                            <p>{lang === "AR" ? "تعمل سيرتنا الذاتية على توظيف أشخاص في أفضل الشركات" : "Our resumes get people hired at top companies"}</p>
                        </div>
                        <div className="flex">
                            {logos.map((logo, index) => {
                                return (
                                    <div key={index * 2} className="my-6 grayscale">
                                        <img className="w-24" src={logo} alt="provider-logo"/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div className={"overflow-hidden md:w-[30%]  mt-10 p-10 bg-base-300 rounded-t-box"}>
                    <img
                        src={"https://cdn.enhancv.com/images?url=https://cdn.enhancv.com/project_Manager_1ae0_Y_a14d276910.jpg&width=1920"}
                        alt={""}/>
                </div>
            </div>
        </div>
    );
};

export default ResumeExamples;
