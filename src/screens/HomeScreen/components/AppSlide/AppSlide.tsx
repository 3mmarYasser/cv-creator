import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {scrollTOElement} from "../../../../utils/scrollElement";
import {useSelector} from "react-redux";
import classNames from "classnames";

const AppSlide: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;
    const [show, setShow] = useState<boolean>(false)
    const showNavHome = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 900) {
                setShow(true);
            } else {
                setShow(false);
            }
        }
    };
    useEffect((): ReturnType<any> => {
        window.addEventListener("scroll", showNavHome)
        return () => window.removeEventListener
    }, [])
    return (
        <div className="flex flex-col mx-auto w-screen">
            <div
                className={classNames("hidden transition-all w-screen bg-base-200 fixed top-[64px] px-5 z-20 left-0 mx-auto pt-3 justify-center items-center space-x-5  border-b-4 border-ghost", {"lg:flex": show})}>
                <span
                    onClick={() => scrollTOElement("resume_builder")}
                    className="px-5 py-3 cursor-pointer flex flex-col justify-center items-center hover:text-primary transition duration-300 border-b-4 border-transparent hover:border-primary"
                >
                        {lang === "AR" ? "منشئ السيرة الذاتية" : "Resume Builder"}
                </span>

                <span
                    onClick={() => scrollTOElement("resume_template")}

                    className="px-5 py-3 cursor-pointer flex flex-col justify-center items-center hover:text-primary transition duration-300 border-b-4 border-transparent hover:border-primary"
                >
                          {lang === "AR" ? "قوالب السيرة الذاتية" : "Resume Templates"}

                </span>

                <span
                    onClick={() => scrollTOElement("resume_examples")}

                    className="px-5 py-3 cursor-pointer flex flex-col justify-center items-center hover:text-primary transition duration-300 border-b-4 border-transparent hover:border-primary"
                >
                        {lang === "AR" ? "أمثلة السيرة الذاتية" : "Resume Examples"}

                </span>

                <span
                    onClick={() => scrollTOElement("resume_proofreading")}

                    className="px-5 py-3 cursor-pointer flex flex-col justify-center items-center hover:text-primary transition duration-300 border-b-4 border-transparent hover:border-primary"
                >
                        {lang === "AR" ? "التدقيق اللغوي" : "Proofreading"}

                </span>
                <span
                    onClick={() => scrollTOElement("career_counseling")}

                    className="px-5 py-3 cursor-pointer flex flex-col justify-center items-center hover:text-primary transition duration-300 border-b-4 border-transparent hover:border-primary"
                >
                        {lang === "AR" ? "إرشاد وظيفي" : "Career Counseling"}
                </span>
            </div>


            {/*2 Home NVE*/}
            <div className="container mx-auto pt-3 justify-center items-center space-x-5 hidden  lg:flex">
                <span
                    onClick={() => scrollTOElement("resume_builder")}
                    className="px-5 cursor-pointer flex flex-col justify-center items-center hover:text-primary transition duration-300"
                >
                    <b className="text-xl">
                        {lang === "AR" ? "منشئ السيرة الذاتية" : "Resume Builder"}
                        </b>
                    <span className="my-1 font-light">
                         {lang === "AR" ? "اصنع سيرة ذاتية مميزة" : "Make a stand-out resume"}
                    </span>
                </span>

                <span
                    onClick={() => scrollTOElement("resume_template")}

                    className="px-5 cursor-pointer flex flex-col justify-center items-center hover:text-primary transition duration-300"
                >
                    <b className="text-xl">
                          {lang === "AR" ? "قوالب السيرة الذاتية" : "Resume Templates"}
                    </b>
                    <span className="my-1 font-light">
                        {lang === "AR" ? "مصممة خصيصًا لك" : "Tailored for you"}
                    </span>
                </span>

                <span
                    onClick={() => scrollTOElement("resume_examples")}

                    className="px-5 cursor-pointer flex flex-col justify-center items-center hover:text-primary transition duration-300"
                >
                    <b className="text-xl">
                        {lang === "AR" ? "أمثلة السيرة الذاتية" : "Resume Examples"}
                    </b>
                    <span className="my-1 font-light">
                        {lang === "AR" ? "اتبع نصائح الخبراء" : "Follow tips from the experts"}
                    </span>
                </span>

                <span
                    onClick={() => scrollTOElement("resume_proofreading")}

                    className="px-5 cursor-pointer flex flex-col justify-center items-center hover:text-primary transition duration-300"
                >
                    <b className="text-xl">
                        {lang === "AR" ? "التدقيق اللغوي" : "Proofreading"}
                    </b>
                    <span className="my-1 font-light">
                        {lang === "AR" ? "لا مزيد من الأخطاء في سيرتك الذاتية" : "No more mistakes in your resume"}
                    </span>
                </span>
                <span
                    onClick={() => scrollTOElement("career_counseling")}

                    className="px-5 cursor-pointer flex flex-col justify-center items-center hover:text-primary transition duration-300"
                >
                    <b className="text-xl">
                        {lang === "AR" ? "إرشاد وظيفي" : "Career Counseling"}
                    </b>
                    <span className="my-1 font-light">
                        {lang === "AR" ? "خبرائنا, سلاحك السري" : "Our experts, your secret weapon"}
                    </span>
                </span>
            </div>

            <div id="resume_builder"
                 className="container mx-auto flex flex-col sm:flex-row justify-center items-center sm:py-10">
                <div className="p-8">
                    <img width="450px"
                         style={{"filter": "drop-shadow(-23px 23px 3px #00000038)"}}
                         draggable={false}
                         onContextMenu={e => e.preventDefault()}
                         src="https://enhancv.com/static/72b8926bde7ba27c488e369a217b32b6/db955/enhancv-resume-builder%402x.png"
                         alt=""/>
                </div>

                <div className="max-w-xl my-10 w-full mx-auto sm:mx-1  p-10 sm:p-0 pt-0">
                    <h1 className="text-xl mb-5 md:text-4xl">
                        {lang === "AR" ? "منشئ السيرة الذاتية الذي يثق به المحترفون" : "The resume builder trusted by professionals"}
                    </h1>
                    <p className="opacity-75">
                        {lang === "AR" ? `قم بإنشاء سيرة ذاتية مذهلة بصريًا تجعل المجندين يرغبون في قراءتها واستكشافها. سيرشدك منشئ السيرة الذاتية خلال هذه العملية. ركز على المحتوى بينما نهتم بالتنسيق.` : `  Create a visually stunning resume that makes recruiters want to read it and explore it. Our
                        resume creator will guide you through the process. Focus on the content, while we take care of
                        the formatting.`}

                    </p>
                    <Link to="/resume/build" className="mt-5 btn btn-md btn-primary text-primary-content">
                        {lang === "AR" ? "بناء سيرتي الذاتية الآن" : "Build my resume now"}
                    </Link>
                </div>

            </div>

            <div className="container mx-auto flex justify-center items-center space-x-10 flex-col md:flex-row">
                <div className="text-2xl md:text4xl font-medium mb-10 lg:3xl">
                    <p>{lang === "AR" ? "دع الأرقام" : "The numbers speak"}</p>
                    <p>{lang === "AR" ? "تتحدث عنا" : "for themselves"}</p>
                </div>

                <div className="flex flex-col lg:flex-row">
                    <div className="text-3xl font-medium flex mx-10">
                        <svg className=" fill-inherit" width="80" height="80" viewBox="0 0 60 60"
                             xmlns="http://www.w3.org/2000/svg">
                            <g className="fill-primary dark:fill-secondary">
                                <path d="M59.9621 29.3193H55.7969V31.677H59.9621V29.3193Z" className="fill-inherit"/>
                                <path
                                    d="M53.6483 16.4088L50.7031 19.354L52.3702 21.0211L55.3155 18.0759L53.6483 16.4088Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M52.4015 39.9172L50.7344 41.5843L53.6796 44.5295L55.3467 42.8624L52.4015 39.9172Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M45.7388 5H10.0594C9.43069 5 8.88057 5.55012 8.88057 6.17884V11.4796H3.37933C1.49319 11.4796 0 12.9728 0 14.8589C0 16.745 1.49319 18.2382 3.37933 18.2382H8.88057V20.3601H7.85891C5.97277 20.3601 4.47958 21.8533 4.47958 23.7395C4.47958 25.6256 5.97277 27.1188 7.85891 27.1188H8.88057V33.6417H7.85891C3.53651 33.6417 0 37.1782 0 41.5006C0 45.823 3.53651 49.3595 7.85891 49.3595H8.88057V54.6603C8.88057 55.289 9.43069 55.8391 10.0594 55.8391H45.7388C46.3676 55.8391 46.9177 55.289 46.9177 54.6603V6.10025C46.9177 5.55012 46.3676 5 45.7388 5ZM3.37933 15.8806C2.82921 15.8806 2.35767 15.409 2.35767 14.8589C2.35767 14.3088 2.82921 13.8373 3.37933 13.8373H18.7395C19.2896 13.8373 19.7611 14.3088 19.7611 14.8589C19.7611 15.409 19.2896 15.8806 18.7395 15.8806H3.37933ZM6.75865 23.7395C6.75865 23.1894 7.23019 22.7178 7.78031 22.7178H23.1405C23.6906 22.7178 24.1621 23.1894 24.1621 23.7395C24.1621 24.2896 23.6906 24.7611 23.1405 24.7611H7.78031C7.23019 24.8397 6.75865 24.3682 6.75865 23.7395ZM7.85891 47.0804C4.79393 47.0804 2.35767 44.6442 2.35767 41.5792C2.35767 38.5142 4.79393 36.078 7.85891 36.078H18.7395C21.8044 36.078 24.2407 38.5142 24.2407 41.5792C24.2407 44.6442 21.8044 47.0804 18.7395 47.0804H7.85891ZM44.56 53.56H11.2382V49.4381H18.7395C23.0619 49.4381 26.5984 45.9016 26.5984 41.5792C26.5984 37.2568 23.0619 33.7203 18.7395 33.7203H11.2382V27.1974H23.2191C25.1052 27.1974 26.5984 25.7042 26.5984 23.8181C26.5984 21.9319 25.1052 20.4387 23.2191 20.4387H11.2382V18.2382H18.7395C20.6256 18.2382 22.1188 16.745 22.1188 14.8589C22.1188 12.9728 20.6256 11.4796 18.7395 11.4796H11.2382V7.35767H44.56V53.56Z"
                                    className="fill-inherit"/>
                                <path d="M14.4587 38.1999H5.57812V40.5576H14.4587V38.1999Z" className="fill-inherit"/>
                                <path d="M18.9383 42.6795H5.57812V45.0372H18.9383V42.6795Z" className="fill-inherit"/>
                                <path
                                    d="M41.2605 40.8719C46.9897 40.8719 51.6342 36.2274 51.6342 30.4982C51.6342 24.7689 46.9897 20.1244 41.2605 20.1244C35.5312 20.1244 30.8867 24.7689 30.8867 30.4982C30.8867 36.2274 35.5312 40.8719 41.2605 40.8719Z"
                                    className="fill-base-100"/>
                                <path
                                    d="M41.2596 18.8669C34.8939 18.8669 29.707 24.0538 29.707 30.4195C29.707 36.7852 34.8939 41.9721 41.2596 41.9721C47.6253 41.9721 52.8122 36.7852 52.8122 30.4195C52.8122 24.0538 47.6253 18.8669 41.2596 18.8669ZM41.2596 21.2246C46.3679 21.2246 50.4545 25.3898 50.4545 30.4195C50.4545 32.3843 49.8258 34.1918 48.8042 35.685C47.9397 34.6633 46.8394 33.956 45.6606 33.4845C46.7608 32.3843 47.4682 30.8125 47.4682 29.1621C47.4682 25.7828 44.7175 22.9536 41.2596 22.9536C37.8017 22.9536 35.0511 25.7042 35.0511 29.1621C35.0511 30.8125 35.7584 32.3843 36.8586 33.4845C35.6798 33.956 34.5795 34.6633 33.7151 35.685C32.6934 34.1918 32.0647 32.3843 32.0647 30.4195C32.0647 25.3898 36.1513 21.2246 41.2596 21.2246ZM37.4087 29.2407C37.4087 27.1188 39.1377 25.3898 41.2596 25.3898C43.3815 25.3898 45.1105 27.1188 45.1105 29.2407C45.1105 31.3626 43.3815 33.0916 41.2596 33.0916C39.1377 33.0916 37.4087 31.3626 37.4087 29.2407ZM35.2868 37.4925C36.3085 36.1565 37.8803 35.3706 39.6092 35.3706H42.91C44.6389 35.3706 46.2107 36.1565 47.2324 37.4925C45.6606 38.8286 43.5387 39.693 41.2596 39.693C38.9805 39.693 36.8586 38.8286 35.2868 37.4925Z"
                                    className="fill-inherit"/>
                            </g>
                        </svg>


                        <div className="flex flex-col mr-2 justify-center">
                            <p className="text-xl md:text-2xl">{lang === "AR" ? "+000 000 2" : "2 000 000+"}</p>
                            <p className="text-xl md:text-2xl font-light">{lang === "AR" ? "سيرة ذاتية ناجحة" : "successful resumes"}</p>
                        </div>
                    </div>
                    <div className="text-3xl  font-medium flex mx-10 ">
                        <svg width="80" height="80" viewBox="0 0 60 60" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g className="fill-primary dark:fill-secondary">
                                <path
                                    d="M17.2784 13.4898V6.1724C17.2784 5.52556 16.7528 5 16.106 5C15.4592 5 14.9336 5.52556 14.9336 6.1724V13.4898C14.9336 14.1366 15.4592 14.6622 16.106 14.6622C16.7528 14.6622 17.2784 14.1366 17.2784 13.4898Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M36.5401 13.4898V6.1724C36.5401 5.52556 36.0145 5 35.3677 5C34.7209 5 34.1953 5.52556 34.1953 6.1724V13.4898C34.1953 14.1366 34.7209 14.6622 35.3677 14.6622C36.0145 14.6622 36.5401 14.1366 36.5401 13.4898Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M11.0938 26.2115C11.0938 26.8583 11.6193 27.3839 12.2661 27.3839H16.5919C17.2387 27.3839 17.7643 26.8583 17.7643 26.2115C17.7643 25.5646 17.2387 25.0391 16.5919 25.0391H12.2661C11.6193 25.0391 11.0938 25.5646 11.0938 26.2115Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M16.5919 39.9545H12.2661C11.6193 39.9545 11.0938 40.48 11.0938 41.1269C11.0938 41.7737 11.6193 42.2993 12.2661 42.2993H16.5919C17.2387 42.2993 17.7643 41.7737 17.7643 41.1269C17.7643 40.48 17.2387 39.9545 16.5919 39.9545Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M16.5919 32.4967H12.2661C11.6193 32.4967 11.0938 33.0223 11.0938 33.6691C11.0938 34.3159 11.6193 34.8415 12.2661 34.8415H16.5919C17.2387 34.8415 17.7643 34.3159 17.7643 33.6691C17.7643 33.0223 17.2387 32.4967 16.5919 32.4967Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M27.9214 25.0391H23.5552C22.9084 25.0391 22.3828 25.5646 22.3828 26.2115C22.3828 26.8583 22.9084 27.3839 23.5552 27.3839H27.881C28.5278 27.3839 29.0534 26.8583 29.0534 26.2115C29.0534 25.5646 28.5682 25.0391 27.9214 25.0391Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M27.9214 32.4967H23.5552C22.9084 32.4967 22.3828 33.0223 22.3828 33.6691C22.3828 34.3159 22.9084 34.8415 23.5552 34.8415H27.881C28.5278 34.8415 29.0534 34.3159 29.0534 33.6691C29.0534 33.0223 28.5682 32.4967 27.9214 32.4967Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M33.7109 26.2115C33.7109 26.8583 34.2365 27.3839 34.8833 27.3839H39.2091C39.8559 27.3839 40.3815 26.8583 40.3815 26.2115C40.3815 25.5646 39.8559 25.0391 39.2091 25.0391H34.8833C34.2365 25.0391 33.7109 25.5646 33.7109 26.2115Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M33.7904 48.776H7.4066C6.27463 48.776 5.3448 47.8462 5.3448 46.7142V12.9345C5.3448 11.8025 6.27463 10.8727 7.4066 10.8727H9.50883C10.1557 10.8727 10.6812 10.3471 10.6812 9.70029C10.6812 9.05345 10.1557 8.52789 9.50883 8.52789H7.4066C4.98095 8.52789 3 10.5088 3 12.9345V46.7142C3 49.1399 4.98095 51.1208 7.4066 51.1208H33.8713C33.7904 50.6357 33.75 50.1101 33.75 49.5846C33.75 49.3016 33.75 49.0186 33.7904 48.776Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M48.4742 32.1138V12.9344C48.4742 10.5088 46.4933 8.52783 44.0676 8.52783H41.9654C41.3185 8.52783 40.793 9.05339 40.793 9.70023C40.793 10.3471 41.3185 10.8726 41.9654 10.8726H44.0676C45.1996 10.8726 46.1294 11.8025 46.1294 12.9344V32.1138C46.5337 32.0734 46.8975 32.033 47.3018 32.033C47.7061 32.033 48.0699 32.033 48.4742 32.1138Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M42.9441 9.70023C42.9441 9.05339 42.4185 8.52783 41.7717 8.52783H8.70755C8.06071 8.52783 7.53516 9.05339 7.53516 9.70023C7.53516 10.3471 8.06071 10.8726 8.70755 10.8726H41.7312C42.4185 10.8726 42.9441 10.3471 42.9441 9.70023Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M46.6758 19C46.6758 18.4483 46.0376 18 45.252 18H5.09952C4.31401 18 3.67578 18.4483 3.67578 19C3.67578 19.5517 4.31401 20 5.09952 20H45.2029C46.0376 20 46.6758 19.5517 46.6758 19Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M43.3005 29.3778C38.7727 29.3778 29.0938 39.0567 29.0938 43.5846C29.0938 48.1125 38.7727 56.7914 43.3005 56.7914C47.8284 56.7914 57.5073 48.1125 57.5073 43.5846C57.5073 39.0567 47.8284 29.3778 43.3005 29.3778ZM43.3005 54.4466C40.0663 54.4466 31.4385 46.8188 31.4385 43.5846C31.4385 40.3504 40.0663 31.7226 43.3005 31.7226C46.5347 31.7226 55.1625 40.3504 55.1625 43.5846C55.1625 46.8188 46.5347 54.4466 43.3005 54.4466Z"
                                    className="fill-inherit"/>
                                <path
                                    d="M47.1436 40.3388L41.4754 46.007L38.6668 43.1984C38.2221 42.7537 37.454 42.7537 37.0093 43.1984C36.5646 43.6431 36.5646 44.4112 37.0093 44.8559L40.6264 48.473C40.869 48.7156 41.152 48.7965 41.4754 48.7965C41.7988 48.7965 42.0818 48.6752 42.3244 48.473L48.8416 41.9559C49.2863 41.5112 49.2863 40.743 48.8416 40.2983C48.316 39.8941 47.5883 39.8941 47.1436 40.3388Z"
                                    className="fill-inherit"/>
                            </g>
                        </svg>


                        <div className="flex flex-col mr-2 justify-center">
                            <p className="text-xl md:text-2xl">{lang === "AR" ? " 29يوم" : "29 days"}</p>
                            <p className="text-xl md:text-2xl font-light">{lang === "AR" ? "متوسط وقت التوظيف" : "average time to get hired"}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AppSlide;
