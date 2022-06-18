import React, {useState, useEffect, useRef} from 'react';
import {useParams} from "react-router";
import {Navigate} from "react-router-dom";
import classNames from "classnames";
import Styles from "./ProfilesScreen.module.scss";
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";

const Music = require("../../assets/audio/music.mp3")
const music = new Audio(Music);

const ProfilesScreen: React.FC = () => {
    const words: string[] = ["Photographer", "Mobile Developer", "Web Developer", "UI/UX Designer"];
    const userName = useParams().userName;
    const [menu, setMenu] = useState<boolean>(false);
    const [audio, setAudio] = useState<boolean>(false);
    const AnimateTextRef = useRef<HTMLSpanElement | null>(null);
    gsap.registerPlugin(TextPlugin)
    useEffect(() => {
        if (audio) {
            music.play().then();
        } else {
            music.pause();
            music.currentTime = 0;
        }
    }, [audio]);
    useEffect(() => {
        let masterTl = gsap.timeline({repeat: -1})

        words.forEach(word => {
            let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
            tl.to(AnimateTextRef.current, {duration: 1, text: word})
            masterTl.add(tl)
        })
    }, []);


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

                <main className={classNames("bg-base-200 overflow-y-auto min-h-screen ml-auto pb-32", [Styles.Main])}>
                    <section className="hero min-h-screen"
                             style={{backgroundImage: "url('https://demo.themearabia.net/basma-resume/uploads/2021/11/unit-secretary-job-description-6888x4592-2020124.jpeg')"}}>
                        <div className="hero-overlay bg-[#00000070] bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h3 className="text-2xl mb-5 md:text-3xl">Hello, My Name Is</h3>
                                <h1 className="mb-5 text-4xl lg:text-6xl font-medium lg:text-[7rem]">Basma Design</h1>
                                <h4 className={classNames(" mb-5 md:text-3xl relative", [Styles.JobsTitle])}>
                                    A Creative Freelancer & Full Stack Developer
                                </h4>
                                <p className="md:text-3xl font-bold">
                                    <span className="mr-1">I‘m working as</span>
                                    <span ref={AnimateTextRef}></span>
                                </p>
                                <div className="mt-7 flex flex-wrap justify-center">
                                    <button
                                        className="btn mb-5 mr-4 glass rounded-full flex justify-center items-center">About
                                        <span className="ml-2 material-symbols-outlined">badge</span>
                                    </button>
                                    <button
                                        className="btn mr-4 glass rounded-full flex justify-center items-center">Contact
                                        <span className="ml-2 material-symbols-outlined">contact_page</span>
                                    </button>
                                    <button
                                        className="btn mr-4 glass rounded-full flex justify-center items-center">Clients
                                        <span className="ml-2 material-symbols-outlined">apartment</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="px-3 md:px-5 max-w-[1300px] mx-auto">
                        <section className="mt-5 text-center md:text-current">
                            <div className="text-center flex flex-col justify-center items-center">
                                <h1 className="text-4xl font-bold">About Me</h1>
                                <span className="text-6xs opacity-75">Basma Design</span>
                                <div className="h-1 mt-1 w-16 bg-primary rounded-box"/>
                            </div>
                            <div className="hero">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <div className="avatar">
                                        <div
                                            className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img draggable={false} onContextMenu={e => e.preventDefault()}
                                                 src="https://demo.themearabia.net/basma-resume/frontend/default/assets/images/avatar.jpg"
                                                 alt={""}/>
                                        </div>
                                    </div>
                                    <div className={"py-7"} style={{direction: "rtl"}}>
                                        <h1 className="text-3xl opacity-80 font-bold">Basma Design</h1>
                                        <p className="py-1">I‘m a Freelance Full Stack Developer based in New York, USA,
                                            and
                                            I‘m very passionate and dedicated to my work .With 8 years experience as a
                                            professional Full Stack Developer, I have acquired the skills necessary to
                                            build
                                            great and premium websites. Lorem ipsum dolor sit amet, mauris suspendisse
                                            viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus,
                                            dignissim
                                            neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin
                                            etiam
                                            libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec
                                            orci ad
                                            vitae pede, id odio. Turpis venenatis at laoreet. Etiam commodo fusce in
                                            diam
                                            feugiat, nullam suscipit tortor per velit viverra minim sed metus egestas
                                            sapien
                                            consectetuer. Turpis venenatis at laoreet. Etiam commodo fusce in diam
                                            feugiat,
                                            nullam suscipit tortor per velit viverra minim sed metus egestas sapien
                                            consectetuer.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="mt-7">
                            <div className="flex justify-end flex-col border-b-2 border-base-300  items-end">
                                <h1 className="text-4xl font-bold">What I‘m Doing</h1>
                                <div className="h-1 mt-1.5 w-20 bg-primary rounded-box"/>
                            </div>
                            <div className={"flex flex-wrap gap-y-3 overflow-hidden lg:-mx-px p-2 md:p-10"}>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full bg-base-100 shadow hover:shadow-xl rounded-none">
                                        <figure className="px-10 pt-10">
                                            <img width={70}
                                                 height={70}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/web-design.svg"
                                                 alt="Shoes"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Web Design</h2>
                                            <p>The most modern and high-quality design made at a professional level.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full bg-base-100 shadow hover:shadow-xl rounded-none">
                                        <figure className="px-10 pt-10">
                                            <img width={70}
                                                 height={70}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/web-design.svg"
                                                 alt="Shoes"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Web Design</h2>
                                            <p>The most modern and high-quality design made at a professional level.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full bg-base-100 shadow hover:shadow-xl rounded-none">
                                        <figure className="px-10 pt-10">
                                            <img width={70}
                                                 height={70}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/web-design.svg"
                                                 alt="Shoes"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Web Design</h2>
                                            <p>The most modern and high-quality design made at a professional level.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full bg-base-100 shadow hover:shadow-xl rounded-none">
                                        <figure className="px-10 pt-10">
                                            <img width={70}
                                                 height={70}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/web-design.svg"
                                                 alt="Shoes"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Web Design</h2>
                                            <p>The most modern and high-quality design made at a professional level.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full bg-base-100 shadow hover:shadow-xl rounded-none">
                                        <figure className="px-10 pt-10">
                                            <img width={70}
                                                 height={70}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/web-design.svg"
                                                 alt="Shoes"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Web Design</h2>
                                            <p>The most modern and high-quality design made at a professional level.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full bg-base-100 shadow hover:shadow-xl rounded-none">
                                        <figure className="px-10 pt-10">
                                            <img width={70}
                                                 height={70}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/web-design.svg"
                                                 alt="Shoes"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Web Design</h2>
                                            <p>The most modern and high-quality design made at a professional level.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </section>

                        <section className="mt-10">
                            <div className="flex justify-end flex-col border-b-2 border-base-300  items-end">
                                <h1 className="text-4xl font-bold">Working Way</h1>
                                <div className="h-1 mt-1.5 w-20 bg-primary rounded-box"/>
                            </div>
                            <div className={"flex flex-wrap gap-y-3 overflow-hidden lg:-mx-px p-2 md:p-10"}>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full   rounded-none">
                                        <figure
                                            className="p-4 w-fit h-fit mx-auto mb-3 border-base-300 border-2 border-dashed bg-base-100 rounded-full">
                                            <img width={54}
                                                 height={54}
                                                 draggable={false}
                                                 onContextMenu={e => e.preventDefault()}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/step03.svg"
                                                 alt="Icon"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div
                                            className="card-body  shadow hover:shadow-xl items-center text-center bg-base-100">
                                            <h2 className="card-title">Development</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                                Lorem Ipsum .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full   rounded-none">
                                        <figure
                                            className="p-4 w-fit h-fit mx-auto mb-3 border-base-300 border-2 border-dashed bg-base-100 rounded-full">
                                            <img width={54}
                                                 height={54}
                                                 draggable={false}
                                                 onContextMenu={e => e.preventDefault()}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/step03.svg"
                                                 alt="Icon"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div
                                            className="card-body  shadow hover:shadow-xl items-center text-center bg-base-100">
                                            <h2 className="card-title">Development</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                                Lorem Ipsum .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full   rounded-none">
                                        <figure
                                            className="p-4 w-fit h-fit mx-auto mb-3 border-base-300 border-2 border-dashed bg-base-100 rounded-full">
                                            <img width={54}
                                                 height={54}
                                                 draggable={false}
                                                 onContextMenu={e => e.preventDefault()}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/step03.svg"
                                                 alt="Icon"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div
                                            className="card-body  shadow hover:shadow-xl items-center text-center bg-base-100">
                                            <h2 className="card-title">Development</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                                Lorem Ipsum .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full   rounded-none">
                                        <figure
                                            className="p-4 w-fit h-fit mx-auto mb-3 border-base-300 border-2 border-dashed bg-base-100 rounded-full">
                                            <img width={54}
                                                 height={54}
                                                 draggable={false}
                                                 onContextMenu={e => e.preventDefault()}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/step03.svg"
                                                 alt="Icon"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div
                                            className="card-body  shadow hover:shadow-xl items-center text-center bg-base-100">
                                            <h2 className="card-title">Development</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                                Lorem Ipsum .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full   rounded-none">
                                        <figure
                                            className="p-4 w-fit h-fit mx-auto mb-3 border-base-300 border-2 border-dashed bg-base-100 rounded-full">
                                            <img width={54}
                                                 height={54}
                                                 draggable={false}
                                                 onContextMenu={e => e.preventDefault()}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/step03.svg"
                                                 alt="Icon"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div
                                            className="card-body  shadow hover:shadow-xl items-center text-center bg-base-100">
                                            <h2 className="card-title">Development</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                                Lorem Ipsum .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/3">
                                    <div className="card w-full   rounded-none">
                                        <figure
                                            className="p-4 w-fit h-fit mx-auto mb-3 border-base-300 border-2 border-dashed bg-base-100 rounded-full">
                                            <img width={54}
                                                 height={54}
                                                 draggable={false}
                                                 onContextMenu={e => e.preventDefault()}
                                                 src="https://demo.themearabia.net/basma-resume/uploads/2021/11/step03.svg"
                                                 alt="Icon"
                                                 className="rounded-xl"/>
                                        </figure>
                                        <div
                                            className="card-body  shadow hover:shadow-xl items-center text-center bg-base-100">
                                            <h2 className="card-title">Development</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                                Lorem Ipsum .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default ProfilesScreen;
