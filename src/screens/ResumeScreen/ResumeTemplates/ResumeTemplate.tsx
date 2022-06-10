import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
// import Styles from './ResumeTemplate.module.scss'


const ResumeTemplate: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;

    return (
        <div className="pt-[140px] min-h-screen w-screen bg-base-100 relative">
            <div className="flex w-screen justify-center ">
                <div className="text-center z-10 w-full md:w-[1140px]">
                    <div className="">
                        <h1 className="text-3xl md:text-6xl font-bold opacity-75">{lang === "AR" ? "قوالب السيرة الذاتية" : "Resume Templates"}</h1>
                        <div className="text-sm breadcrumbs opacity-60 flex justify-center mt-2">
                            <ul>
                                <li><Link to={"/"}>{lang === "AR" ? "الرئيسية" : "Home"}</Link></li>
                                <li><span>{lang === "AR" ? "القوالب" : "Resume Templates"}</span></li>
                            </ul>
                        </div>
                        <p className="py-2">{lang === "AR" ? `اختر أحد قوالب السير الذاتية الاحترافية المتميزة. أنشئ سيرتك الذاتية بمساعدة منشئ سيرة ذاتية سهل الاستخدام يعمل بالسحب والإفلات ، وقم بتنزيله في خمس دقائق. اتخذ حركتك واحصل على وظيفة أحلامك.` : `Pick one of our stand-out, professional resume templates. Create your resume with the help of an intuitive drag-and-drop resume builder, and download it in five minutes. Make your move and land your dream job.`}</p>

                    </div>
                </div>
            </div>


            {/*Cute Background*/}
            <>
                <div className="absolute top-10 -right-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="375" height="380" viewBox="0 0 375 380" fill="none">
                        <path
                            d="M7.46572 281.337C28.0516 222.734 122.884 152.875 140.827 183.617C180.361 243.157 287.804 36.1508 235.701 327.271C215.115 385.875 162.989 310.606 103.553 289.728C44.1162 268.849 -13.1202 339.94 7.46572 281.337Z"
                            className="fill-primary"/>
                        <path
                            d="M331.993 253.343C302.26 293.041 232.018 314.539 160.239 260.778C95.5007 216 24.095 116.931 53.828 77.2327C83.5609 37.5345 196.132 63.2575 267.911 117.018C339.691 170.779 361.726 213.645 331.993 253.343Z"
                            className="fill-accent"/>
                    </svg>
                </div>
                <div style={{transform: "scale(-1)"}} className="absolute top-10 -left-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="375" height="380" viewBox="0 0 375 380" fill="none">
                        <path
                            d="M7.46572 281.337C28.0516 222.734 122.884 152.875 140.827 183.617C180.361 243.157 287.804 36.1508 235.701 327.271C215.115 385.875 162.989 310.606 103.553 289.728C44.1162 268.849 -13.1202 339.94 7.46572 281.337Z"
                            className="fill-success"/>
                        <path
                            d="M331.993 253.343C302.26 293.041 232.018 314.539 160.239 260.778C95.5007 216 24.095 116.931 53.828 77.2327C83.5609 37.5345 196.132 63.2575 267.911 117.018C339.691 170.779 361.726 213.645 331.993 253.343Z"
                            className="fill-warning"/>
                    </svg>
                </div>

            </>
        </div>

    );
};

export default ResumeTemplate;
