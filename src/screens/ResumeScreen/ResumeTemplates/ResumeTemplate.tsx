import React from 'react';
import {useSelector} from "react-redux";
// import Styles from './ResumeTemplate.module.scss'


const ResumeTemplate: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;

    return (
        <div className="pt-[140px] min-h-screen w-screen bg-base-100 flex justify-center">
            <div className="text-center w-full md:w-[1140px]">
                <div className="">
                    <h1 className="text-6xl font-bold opacity-75">{lang === "AR" ? "قوالب السيرة الذاتية" : "Resume Templates"}</h1>
                    <p className="py-6">{lang === "AR" ? `اختر أحد قوالب السير الذاتية الاحترافية المتميزة. أنشئ سيرتك الذاتية بمساعدة منشئ سيرة ذاتية سهل الاستخدام يعمل بالسحب والإفلات ، وقم بتنزيله في خمس دقائق. اتخذ حركتك واحصل على وظيفة أحلامك.` : `Pick one of our stand-out, professional resume templates. Create your resume with the help of an intuitive drag-and-drop resume builder, and download it in five minutes. Make your move and land your dream job.`}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ResumeTemplate;
