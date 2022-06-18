import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import {Navigate} from "react-router-dom";
import classNames from "classnames";
import Styles from "./ProfilesScreen.module.scss";

const Music = require("../../assets/audio/music.mp3")
const music = new Audio(Music);


const ProfilesScreen: React.FC = () => {
    const userName = useParams().userName;
    console.log(userName)
    const [menu, setMenu] = useState<boolean>(false);
    const [audio, setAudio] = useState<boolean>(false);

    useEffect(() => {
        if (audio) {
            music.play().then();
        } else {
            music.pause();
            music.currentTime = 0;
        }
    }, [audio]);

    if (userName === null || userName === undefined) return <Navigate to={"/404"}/>
    return (
        <div className={Styles.Profile}>
            <div className="navbar lg:hidden bg-base-100 w-screen">
                <div className="flex-1 items-center">
                    <div className="avatar online">
                        <div className="w-10 rounded-full">
                            <img draggable={false} onContextMenu={e => e.preventDefault()}
                                 src="https://demo.themearabia.net/basma-resume/frontend/default/assets/images/avatar.jpg"
                                 alt={""}/>
                        </div>
                    </div>
                    <h1 className="ml-1 opacity-80">Basma Resume</h1>
                </div>
                <div className="flex-none">
                    <button onClick={() => setMenu(!menu)} className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-5 h-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>

                    </button>
                </div>
            </div>
            <div style={{direction: "ltr"}} className="overflow-hidden flex flex-row w-screen min-h-screen">
                <header
                    className={classNames("fixed transition-all z-10 left-[-100px] lg:left-0  w-[80px] h-full  items-center overflow-x-hidden bg-base-100  flex flex-col overflow-y-auto", {[Styles.menuOpen]: menu})}>
                    <ul tabIndex={0} className="mt-2 w-full">
                        <li className="border-b-[1px] border-base-300 p-2 w-full hidden lg:block">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img draggable={false} onContextMenu={e => e.preventDefault()}
                                         src="https://demo.themearabia.net/basma-resume/frontend/default/assets/images/avatar.jpg"
                                         alt={""}/>
                                </div>
                            </div>
                        </li>
                        <li className="border-b-[1px] border-base-300 p-2 w-full">
                            <div id={`${audio ? "wave" : ""}`}
                                 onClick={() => setAudio(!audio)}
                                 className={classNames("cursor-pointer px-1 py-2 flex justify-between items-center w-full ", [Styles.Music])}>
                                <span id="Line_1"></span>
                                <span id="Line_2"></span>
                                <span id="Line_3"></span>
                                <span id="Line_4"></span>
                                <span id="Line_5"></span>
                                <span id="Line_6"></span>
                            </div>
                        </li>
                        <li className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-75">
                                cottage
                            </span>
                                </button>
                            </div>
                        </li>
                        <li className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-75">
                                person
                            </span>
                                </button>
                            </div>
                        </li>
                        <li className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-75">
                                contact_emergency
                            </span>
                                </button>
                            </div>
                        </li>
                        <li className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-75">
                                work
                            </span>
                                </button>
                            </div>
                        </li>
                        <li className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-75">
                                mail
                            </span>
                                </button>
                            </div>
                        </li>
                        <li className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-75">
                                calendar_month
                            </span>
                                </button>
                            </div>
                        </li>

                    </ul>
                </header>

                <main className={classNames("bg-base-200 overflow-y-auto min-h-screen ml-auto", [Styles.Main])}>
                    <div className="hero min-h-screen"
                         style={{backgroundImage: "url('https://demo.themearabia.net/basma-resume/uploads/2021/11/unit-secretary-job-description-6888x4592-2020124.jpeg')"}}>
                        <div className="hero-overlay bg-[#00000070] bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h3 className="mb-5 text-3xl">Hello, My Name Is</h3>
                                <h1 className="mb-5 text-4xl lg:text-6xl font-medium lg:text-[7rem]">Basma Design</h1>
                                <h4 className={classNames("mb-5 text-3xl relative", [Styles.JobsTitle])}>
                                    A Creative Freelancer & Full Stack Developer
                                </h4>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProfilesScreen;
