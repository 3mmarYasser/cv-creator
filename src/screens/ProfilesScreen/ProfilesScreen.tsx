import React, {useState, useEffect, useRef} from 'react';
import {useParams} from "react-router";
import {Navigate} from "react-router-dom";
import classNames from "classnames";
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, FreeMode} from "swiper";
import Styles from "./ProfilesScreen.module.scss";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";
import {scrollTOElement} from "../../utils/scrollElement";

const Music = require("../../assets/audio/music.mp3")
const music = new Audio(Music);

const ProfilesScreen: React.FC = () => {
    const words: string[] = ["Photographer", "Mobile Developer", "Web Developer", "UI/UX Designer"];
    const clients: string[] = ["https://demo.themearabia.net/basma-resume/uploads/2021/11/06.png", "https://demo.themearabia.net/basma-resume/uploads/2021/11/08.png", "https://demo.themearabia.net/basma-resume/uploads/2021/11/04-1.png", "https://demo.themearabia.net/basma-resume/uploads/2021/11/05.png"]
    const Skills: any[] = [
        {title: "Laravel coding", progress: 93},
        {title: "Php coding", progress: 85},
        {title: "Html / Css coding", progress: 75},
        {title: "React coding", progress: 100},
        {title: "Nest Coding", progress: 80}
    ]
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
            <div className="fixed z-20 navbar lg:hidden bg-base-100 w-screen">
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
                        <li onClick={() => scrollTOElement("proHome")} className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-60">
                                cottage
                            </span>
                                </button>
                            </div>
                        </li>
                        <li onClick={() => scrollTOElement("proAbout")} className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-60">
                                person
                            </span>
                                </button>
                            </div>
                        </li>
                        <li onClick={() => scrollTOElement("proSkills")} className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-60">
                                star
                            </span>
                                </button>
                            </div>
                        </li>
                        <li onClick={() => scrollTOElement("proWay")} className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-60">
                                aod
                            </span>
                                </button>
                            </div>
                        </li>
                        <li onClick={() => scrollTOElement("proClients")} className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-60">
                                work
                            </span>
                                </button>
                            </div>
                        </li>
                        <li onClick={() => scrollTOElement("proFacts")} className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-60">
                                favorite
                            </span>
                                </button>
                            </div>
                        </li>
                        <li onClick={() => scrollTOElement("proSkillProgress")} className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-60">
                                contact_emergency
                            </span>
                                </button>
                            </div>
                        </li>
                        <li onClick={() => scrollTOElement("proMap")} className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-60">
                                map
                            </span>
                                </button>
                            </div>
                        </li>
                        <li onClick={() => scrollTOElement("proContact")} className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer   btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-60">
                                mail
                            </span>
                                </button>
                            </div>
                        </li>
                        <li onClick={() => scrollTOElement("proFollow")} className=" p-1 w-full ">
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className={classNames("cursor-pointer btn btn-ghost btn-circle")}>
                            <span className="material-symbols-outlined opacity-60 ">
                                share
                            </span>
                                </button>
                            </div>
                        </li>

                    </ul>
                </header>

                <main className={classNames("bg-base-200 overflow-y-auto min-h-screen ml-auto pb-32", [Styles.Main])}>

                    <section id="proHome" className="hero min-h-screen bg-cover bg-center bg-fixed"
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
                                        onClick={() => scrollTOElement("proAbout")}
                                        className="btn mb-5 mr-4 glass rounded-full flex justify-center items-center">About
                                        <span className="ml-2 material-symbols-outlined">badge</span>
                                    </button>
                                    <button
                                        onClick={() => scrollTOElement("proContact")}

                                        className="btn mr-4 glass rounded-full flex justify-center items-center">Contact
                                        <span className="ml-2 material-symbols-outlined">contact_page</span>
                                    </button>
                                    <button
                                        onClick={() => scrollTOElement("proClients")}

                                        className="btn mr-4 glass rounded-full flex justify-center items-center">Clients
                                        <span className="ml-2 material-symbols-outlined">apartment</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="px-3 md:px-5 max-w-[1300px] mx-auto">
                        <section id="proAbout" className="mt-5 text-center md:text-justify">
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
                        <section id="proSkills" className="mt-7">
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
                        <section id="proWay" className="mt-10">
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
                        <section id="proClients" className="mt-5">
                            <div className="flex justify-end flex-col border-b-2 border-base-300  items-end">
                                <h1 className="text-4xl font-bold">My Clients</h1>
                                <div className="h-1 mt-1.5 w-20 bg-primary rounded-box"/>
                            </div>
                            <div style={{direction: "ltr"}}>
                                <Swiper
                                    slidesPerView={7}
                                    spaceBetween={30}
                                    direction={'horizontal'}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, A11y]}
                                    className="mySwiper  by-10"
                                    centeredSlides={true}
                                    loop={true}

                                    autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false,
                                    }}
                                    speed={1000}

                                    breakpoints={{
                                        "320": {
                                            slidesPerView: 2.5,
                                            spaceBetween: 30,
                                        },
                                        "768": {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
                                        },
                                        "1024": {
                                            slidesPerView: 5,
                                            spaceBetween: 30,
                                        },
                                        "1280": {
                                            slidesPerView: 6,
                                            spaceBetween: 30,
                                        },
                                        "1600": {
                                            slidesPerView: 7,
                                            spaceBetween: 30,
                                        }
                                    }}
                                >
                                    {clients.map(img => (
                                        <SwiperSlide key={img}>
                                            <img width={250} height={100} draggable={false}
                                                 onContextMenu={e => e.preventDefault()}
                                                 src={img}
                                                 alt={"ClientImage"}/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </section>
                        <section id="proFacts" className="mt-28">
                            <div className="flex justify-end flex-col border-b-2 border-base-300  items-end">
                                <h1 className="text-4xl font-bold">Fun Facts</h1>
                                <div className="h-1 mt-1.5 w-20 bg-primary rounded-box"/>
                            </div>
                            <div className={"flex flex-wrap gap-y-3 overflow-hidden lg:-mx-px p-2 md:p-10"}>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/4">
                                    <div className="card w-full bg-base-100 shadow hover:shadow-xl">
                                        <figure className="px-10 pt-10">
                                     <span
                                         className="material-symbols-outlined text-6xl opacity-80">alarm</span>
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Working Hours</h2>
                                            <p>365</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/4">
                                    <div className="card w-full bg-base-100 shadow hover:shadow-xl ">
                                        <figure className="px-10 pt-10">
                                    <span
                                        className="material-symbols-outlined text-6xl opacity-80">coffee</span>
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Coffee Consumed</h2>
                                            <p>352</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/4">
                                    <div className="card w-full bg-base-100 shadow hover:shadow-xl ">
                                        <figure className="px-10 pt-10">
                                            <span
                                                className="material-symbols-outlined text-6xl opacity-80">business_center</span>
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Projects Done</h2>
                                            <p>320</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 md:p-7 overflow-hidden  md:my-px  md:w-1/2 xl:w-1/4">
                                    <div className="card w-full bg-base-100 shadow hover:shadow-xl  ">
                                        <figure className="px-10 pt-10">
                                            <span
                                                className="material-symbols-outlined text-6xl opacity-80">favorite</span>
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">Happy Clients</h2>
                                            <p>1325</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="proSkillProgress" className="mt-20">
                            <div className="flex justify-end flex-col border-b-2 border-base-300  items-end">
                                <h1 className="text-4xl font-bold">Skills</h1>
                                <div className="h-1 mt-1.5 w-20 bg-primary rounded-box"/>
                            </div>
                            <div className="py-3 px-5">
                                {Skills.map(skill => (
                                    <div key={skill.title} className={"my-3"}>
                                        <div className="flex justify-between items-center">
                                            <span>{skill.progress}%</span>
                                            <span>{skill.title}</span>
                                        </div>
                                        <progress className="progress progress-primary w-full" value={skill.progress}
                                                  max="100"></progress>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section id="proMap" className="mt-32 text-center md:text-justify">
                            <div className="text-center flex flex-col justify-center items-center">
                                <h1 className="text-4xl font-bold">Contact Me</h1>
                                <span className="text-6xs opacity-75">Need Some Help!</span>
                                <div className="h-1 mt-1 w-16 bg-primary rounded-box"/>
                            </div>
                            <div className="mt-5 p-2 bg-base-300">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7225119.239421704!2d32.39466622802709!3d27.843908481970395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1655571461603!5m2!1sen!2seg"
                                    width="100%" height={450} allowFullScreen={true} loading={"lazy"}
                                    referrerPolicy="no-referrer-when-downgrade" title={"Google Map"}></iframe>
                            </div>
                        </section>
                        <section id="proContact" className="mt-36">
                            <div className="flex justify-end flex-col border-b-2 border-base-300  items-end">
                                <h1 className="text-4xl font-bold">Contact Us</h1>
                                <div className="h-1 mt-1.5 w-20 bg-primary rounded-box"/>
                            </div>
                            <div className="py-3 px-5 max-w-md ml-auto flex flex-col justify-between">
                                <div className="flex items-center flex-row-reverse mt-3">
                                    <span
                                        className="material-symbols-outlined ml-3 p-3 rounded-full bg-base-100 text-primary">share_location</span>
                                    <span className="">Egypt/cairo</span>
                                </div>
                                <div className="flex items-center flex-row-reverse mt-3">
                                    <span
                                        className="material-symbols-outlined ml-3 p-3 rounded-full bg-base-100 text-primary">call</span>
                                    <span className="">0123456789</span>
                                </div>
                                <div className="flex items-center flex-row-reverse mt-3">
                                    <span
                                        className="material-symbols-outlined ml-3 p-3 rounded-full bg-base-100 text-primary">alternate_email</span>
                                    <span className="">example@example.com</span>
                                </div>

                            </div>
                        </section>
                        <section id="proFollow" className="mt-7">
                            <div className="flex justify-end flex-col border-b-2 border-base-300  items-end">
                                <h1 className="text-4xl font-bold">Follow Me</h1>
                                <div className="h-1 mt-1.5 w-20 bg-primary rounded-box"/>
                            </div>
                            <div className="flex justify-center mt-5 flex-wrap">
                                <a href="https://twitter.com" className={"p-3 bg-blue-500 rounded-full ml-2 m-1 shadow"}
                                   target="_blank"
                                   rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="fill-white">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>

                                <a href="https://youtube.com" target="_blank"
                                   className={"p-3 bg-red-700 rounded-full ml-2 m-1 shadow"}
                                   rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="fill-white">
                                        <path
                                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                    </svg>
                                </a>

                                <a href="https://fb.com" target="_blank"
                                   className={"p-3 bg-blue-900 rounded-full ml-2 m-1 shadow"}
                                   rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="fill-white">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </a>
                            </div>
                        </section>

                    </div>

                </main>
            </div>
        </div>
    );
};

export default ProfilesScreen;
