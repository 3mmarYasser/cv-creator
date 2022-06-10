import React, {useCallback, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setGLang} from "../../store/langSlice";

const themes = [
    "light",
    "halloween",
    "luxury",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter"
];

const Navbar = () => {
    //Get Lang from SELECTOR
    const lang = ((useSelector((state: any) => state)).lang).value;
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false);
    //Get Languages
    const getLang = (): string | null => {
        return localStorage.getItem("lang");
    }
    //Change Languages
    const ChangeLang = (): void => {
        if (getLang() === "AR") {
            localStorage.setItem("lang", "EN")
        } else if (getLang() === "EN") {
            localStorage.setItem("lang", "AR")
        }
        SetLangAttr();
    }
    //SET ATTR Lang
    const SetLangAttr = (): void => {
        const HTMLEL = document.getElementsByTagName('html')[0];
        if (getLang() === "EN") {
            HTMLEL.lang = "en";
            HTMLEL.dir = "ltr";
            setGlobalLang("EN")
        } else if (getLang() === "AR") {
            HTMLEL.lang = "ar";
            HTMLEL.dir = "rtl";
            setGlobalLang("AR");
        }
    }
    //CHANGE Value Global
    const setGlobalLang = (lang: string | null) => {
        dispatch(setGLang(lang))
    }

    const getThemeActive = () => {
        return localStorage.getItem('theme')
    }
    // on first load check localStorage for themes and set the active theme
    useEffect(() => {
        if (getLang() === null) {
            localStorage.setItem("lang", "EN")
        }
        SetLangAttr();
        const myTheme = getThemeActive();

        if (myTheme === null) {
            localStorage.setItem('theme', themes[0])
        } else {
            changeTheme(myTheme)
        }
    }, [])

    const [activeTheme, setActiveTheme] = useState(getThemeActive() || themes[0])
    //change theme of DaisyUI to dark

    const changeTheme = (theme: string) => {
        const element = document.getElementsByTagName('html')[0];
        element.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
        setActiveTheme(theme)
        if (localStorage.getItem("theme") === "light") {
            element.classList.remove("dark");
        } else {
            element.classList.add("dark");
        }
    }

    const changeThemeHandler = () => {

        // get index of active theme in themes enum and add 1
        let index = themes.indexOf(activeTheme) + 1
        if (index >= themes.length) {
            index = 0
        }
        changeTheme(themes[index])
    }


    const [show, setShow] = useState(true);


    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY < 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        }
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
        }
    }, []);
    return (
        <header tabIndex={100}
                className={classNames("w-[100vw]  pt-5 flex justify-center fixed z-50 ")}>
            <button className="btn rounded-btn bg-base-100 text-base-content fixed bottom-5 right-5" onClick={() => {
                changeThemeHandler()
            }}>{activeTheme}</button>

            <nav
                className={classNames("flex navbar bg-base-200 rounded-box w-screen-lg mx-5 border-primary border-2 ")}
                style={{boxShadow: `${show && "0 5px 0 3px #0000001f"} `, border: `${show && "0"}`}}>

                <div className={classNames("flex items-center w-fit ml-8", {"ml-0 mr-8": lang === "AR"})}>
                    <Link to="">
                        <svg className="fill-primary w-[150px] md:w-[194px]" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 143 22">
                            <g>
                                <path
                                    d="M100.561,6.134c-2.758,0-5.003,2.244-5.003,5.002v2.022c0,2.758,2.245,5.002,5.003,5.002 c1.457,0,2.766-0.63,3.681-1.627v1.627h1.321v-5.002v-0.661v-1.361C105.563,8.378,103.318,6.134,100.561,6.134 M104.241,12.498 v0.661c0,2.028-1.651,3.681-3.681,3.681c-2.03,0-3.682-1.652-3.682-3.681v-2.022c0-2.03,1.651-3.682,3.682-3.682 c2.029,0,3.681,1.652,3.681,3.682V12.498z"></path>
                                <path
                                    d="M87.857,6.134c-1.457,0-2.766,0.63-3.682,1.627V3.422h-1.321v7.714v2.769v4.257h1.321v-4.257v-2.769 c0-2.029,1.651-3.681,3.682-3.681c2.029,0,3.682,1.652,3.682,3.681v7.025h1.32v-7.025C92.859,8.378,90.615,6.134,87.857,6.134"></path>
                                <path
                                    d="M113.445,6.134c-1.457,0-2.766,0.63-3.681,1.627V6.134h-1.321v5.002v0.661v6.364h1.321v-6.364v-0.661 c0-2.029,1.651-3.681,3.681-3.681c2.03,0,3.682,1.652,3.682,3.681v7.025h1.32v-7.025C118.447,8.378,116.203,6.134,113.445,6.134"></path>
                                <path
                                    d="M74.641,6.134c-1.457,0-2.766,0.63-3.682,1.627V6.134h-1.321v5.002v0.661v6.364h1.321v-6.364v-0.661 c0-2.029,1.652-3.681,3.682-3.681c2.03,0,3.682,1.652,3.682,3.681v7.025h1.32v-7.025C79.643,8.378,77.398,6.134,74.641,6.134"></path>
                                <path
                                    d="M126.148,16.84c-2.029,0-3.681-1.652-3.681-3.681v-2.022c0-2.03,1.651-3.682,3.681-3.682 c1.561,0,2.955,0.988,3.473,2.458l1.248-0.439c-0.705-1.998-2.602-3.34-4.721-3.34c-2.758,0-5.002,2.244-5.002,5.003v2.022 c0,2.758,2.244,5.002,5.002,5.002c2.122,0,4.02-1.345,4.721-3.345l-1.246-0.438C129.106,15.852,127.711,16.84,126.148,16.84"></path>
                                <path
                                    d="M141.645,6.134v5.017c0,0.988-0.387,1.916-1.094,2.617l-2.588,2.588l-2.59-2.59 c-0.703-0.697-1.092-1.627-1.092-2.615V6.134h-1.32v5.017c0,1.344,0.526,2.605,1.48,3.551l3.521,3.521l3.52-3.52 c0.957-0.948,1.482-2.209,1.482-3.553V6.134H141.645z"></path>
                                <polygon
                                    points="58.256,11.294 66.356,11.294 66.356,9.973 58.256,9.973 58.256,4.743 66.746,4.743 66.746,3.422 56.936,3.422 56.936,9.973 56.936,11.294 56.936,18.16 66.94,18.16 66.94,16.84 58.256,16.84 "></polygon>
                                <path
                                    d="M35.472,21.453l0.062-0.062c0.025-0.028,0.046-0.054,0.066-0.081s0.04-0.057,0.058-0.086l0.048-0.072 l7.385-13.877c0.379-0.714,0.58-1.523,0.58-2.339c0-2.757-2.243-5-5-5c-1.186,0-2.338,0.423-3.242,1.191l-0.062,0.056l-7.315,6.426 l0.569,0.568c0.037,0.033,0.077,0.073,0.123,0.125c0.339,0.385,0.955,0.433,1.351,0.116l6.595-5.796 c0.556-0.474,1.257-0.732,1.981-0.732c1.679,0,3.045,1.366,3.045,3.046c0,0.503-0.117,0.981-0.35,1.421l-6.79,12.752L18.589,3.121 c-2.057-2.057-4.792-3.19-7.702-3.19c-2.91,0-5.645,1.133-7.701,3.19C1.132,5.175,0,7.91,0,10.822c0,2.912,1.132,5.647,3.186,7.701 c2.056,2.058,4.791,3.19,7.701,3.19c2.891,0,5.614-1.121,7.666-3.155l4.116-3.617l-0.56-0.561c-0.04-0.034-0.081-0.076-0.13-0.131 c-0.342-0.389-0.993-0.434-1.384-0.09l-3.343,2.938c-1.733,1.731-3.978,2.66-6.365,2.66c-2.388,0-4.633-0.929-6.319-2.617 c-1.685-1.685-2.614-3.93-2.614-6.319s0.929-4.634,2.614-6.319c1.686-1.688,3.931-2.617,6.319-2.617c2.387,0,4.632,0.929,6.32,2.617 l16.921,16.922c0.061,0.049,0.088,0.071,0.116,0.092c0.024,0.019,0.051,0.037,0.08,0.054l0.073,0.039 c0.044,0.021,0.074,0.032,0.105,0.043c0.027,0.01,0.056,0.019,0.086,0.025c0.033,0.008,0.066,0.014,0.099,0.02 c0.026,0.002,0.058,0.007,0.09,0.009l0.078,0.007c0.044-0.01,0.077-0.014,0.111-0.018c0.026-0.004,0.056-0.011,0.087-0.019 c0.033-0.009,0.06-0.017,0.086-0.026c0.032-0.01,0.06-0.021,0.09-0.035c0.034-0.017,0.059-0.029,0.084-0.045 c0.029-0.017,0.053-0.032,0.077-0.051C35.419,21.499,35.446,21.477,35.472,21.453"></path>
                            </g>
                        </svg>
                    </Link>
                </div>

                <ul className={classNames("w-full mx-8  text-lg hidden lg:flex")}>


                    <li>
                        <div className="dropdown cursor-pointer mx-2">
                            <label tabIndex={5}
                                   className="btn-ghost hover:bg-transparent hover:text-primary rounded-btn">
                                {lang === "AR" ? "سيرة ذاتية" : "Resume"}
                            </label>
                            <ul tabIndex={5}
                                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li><Link to={"resume/templates"}>
                                    {lang === "AR" ? "قوالب السيرة الذاتية" : "Resume Templates"}

                                </Link></li>
                                <li><Link to={"resume/examples"}>
                                    {lang === "AR" ? "أمثلة السيرة الذاتية" : "Resume Examples"}

                                </Link></li>
                                <li><Link to={"resume/build"}>
                                    {lang === "AR" ? "منشئ السيرة الذاتية" : "Resume Builder"}

                                </Link></li>
                                <span className="border-t-4 my-2 rounded-box border-primary"/>
                                <li>
                                    <Link className="btn  text-primary-content btn-primary rounded-btn "
                                          to={"resume/build"}>
                                        {lang === "AR" ? "بناء سيرتك الذاتية" : "Build Your Resume"}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div className="dropdown cursor-pointer mx-2">
                            <label tabIndex={0}
                                   className="btn-ghost hover:bg-transparent hover:text-primary rounded-btn">
                                {lang === "AR" ? "سى فى" : "CV"}
                            </label>
                            <ul tabIndex={0}
                                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li><Link to={"resume/templates"}>
                                    {lang === "AR" ? "قوالب سى فى" : "CV Templates"}
                                </Link></li>
                                <li><Link to={"resume/examples"}>
                                    {lang === "AR" ? "امثلة سى فى" : "CV Examples"}

                                </Link></li>
                                <li><Link to={"resume/build"}>
                                    {lang === "AR" ? "بناء سى فى" : "CV Builder"}
                                </Link></li>
                                <span className="border-t-4 my-2 rounded-box border-primary"/>
                                <li>
                                    <Link className="btn  text-primary-content btn-primary rounded-btn "
                                          to={"resume/build"}>
                                        {lang === "AR" ? "ابنى السى فى الخاص بك" : " Build Your CV"}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li><Link to={"/cover-letter"}
                              className="btn-ghost hover:bg-transparent hover:text-primary cursor-pointer mx-2">
                        {lang === "AR" ? "خطاب تلقائى" : "Cover Letter"}
                    </Link></li>

                    <li onClick={ChangeLang}>
                        <span
                            className={classNames("btn-ghost flex hover:bg-transparent hover:text-primary cursor-pointer mx-2", {"flex-row-reverse": lang === "AR"})}>
                                                               {lang === "AR" ? "الإنجليزية" : lang === "EN" ? "AR" : "AR"}
                            <i className="material-icons ml-2 text-primary">translate</i>
                        </span>

                    </li>

                    <div
                        className={classNames(" w-fit space-x-2", {"mr-auto  ": lang === "AR"}, {"ml-auto": lang === "EN"})}>
                        <Link to={"/login"}>
                            <button className="btn btn-outline btn-primary ml-2 text-primary-content px-10 text-lg">
                                {lang === "AR" ? "تسجيل الدخول" : "Sign-in"}
                            </button>
                        </Link>
                        <Link to={"login#sign-up"}>
                            <button className="btn btn-primary text-primary-content px-10 text-lg">
                                {lang === "AR" ? "حساب جديد" : "sign-up"}
                            </button>
                        </Link>
                    </div>
                </ul>

                <button onClick={() => {
                    setMenu(!menu)
                }}
                        className={classNames(` active:rotate-90 transition-transform z-50 lg:hidden ${(menu) ? "rotate-90" : ""}`, {"mr-auto ml-5": lang === "AR"}, {"ml-auto mr-5": lang === "EN"})}>
                    <svg width="35" height="30" viewBox="0 0 35 30" className=" fill-primary hover:fill-secondary"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="menu-btn">
                            <rect id="Rectangle" x="0" y="0" width="100%" height="15%" fill="inherit"
                                  className="transition-colors duration-300"/>
                            <rect id="Rectangle" x="0" y="33%" width="100%" height="15%" fill="inherit"
                                  className="transition-colors duration-200"/>
                            <rect id="Rectangle" x="0" y="66%" width="100% " height="15%" fill="inherit"
                                  className="transition-colors duration-100"/>
                        </g>
                    </svg>
                </button>
            </nav>
            {
                <div
                    className={`bg-base-100 fixed left-0 right-0 z-10 h-full -top-full transition-all duration-[400ms]`}
                    style={{top: `${(menu) ? "0" : "-100%"}`}}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <ul onClick={() => {
                            setMenu(!menu)
                        }} className="flex flex-col items-center justify-center h-full">
                            <li><Link
                                className="btn-ghost hover:bg-transparent hover:text-primary cursor-pointer mx-2 mb-1"
                                to={"resume/templates"}>
                                {lang === "AR" ? "قوالب السيرة الذاتية" : "Resume Templates"}
                            </Link></li>
                            <li><Link
                                className="btn-ghost hover:bg-transparent hover:text-primary cursor-pointer mx-2 mb-1"
                                to={"resume/examples"}>
                                {lang === "AR" ? "أمثلة السيرة الذاتية" : "Resume Examples"}
                            </Link></li>
                            <li><Link
                                className="btn-ghost hover:bg-transparent hover:text-primary cursor-pointer mx-2 mb-1"
                                to={"resume/build"}>
                                {lang === "AR" ? "منشئ السيرة الذاتية" : "Resume Builder"}
                            </Link></li>
                            <li><Link
                                className="btn-ghost hover:bg-transparent hover:text-primary cursor-pointer mx-2 mb-1"
                                to={"resume/templates"}>
                                {lang === "AR" ? "قوالب سى فى" : "CV Templates"}
                            </Link></li>
                            <li><Link
                                className="btn-ghost hover:bg-transparent hover:text-primary cursor-pointer mx-2 mb-1"
                                to={"resume/examples"}>
                                {lang === "AR" ? "امثلة سى فى" : "CV Examples"}
                            </Link></li>
                            <li><Link
                                className="btn-ghost hover:bg-transparent hover:text-primary cursor-pointer mx-2 mb-1"
                                to={"resume/build"}>
                                {lang === "AR" ? "ابنى السى فى الخاص بك" : " Build Your CV"}

                            </Link></li>
                            <li><Link to={"/cover-letter"}
                                      className="btn-ghost hover:bg-transparent hover:text-primary cursor-pointer mx-2">
                                {lang === "AR" ? "خطاب تلقائى" : "Cover Letter"}
                            </Link></li>
                            <li onClick={ChangeLang}>
                                <span
                                    className="btn-ghost flex hover:bg-transparent hover:text-primary cursor-pointer mx-2">
                                                               {lang === "AR" ? "الإنجليزية" : lang === "EN" ? "AR" : "AR"}
                                    <i className="material-icons ml-2 text-primary">translate</i></span>
                            </li>
                            <li className="mt-3">
                                <div className=" w-screen flex flex-col justify-center items-center ml-auto">

                                    <Link
                                        className="btn mb-2 btn-outline btn-primary text-primary-content px-10 text-md"
                                        to={"/login"}>
                                        {lang === "AR" ? "تسجيل الدخول" : "Sign-in"}
                                    </Link>

                                    <Link className="btn btn-primary text-primary-content px-10 text-md"
                                          to={"/login#sign-up"}>
                                        {lang === "AR" ? "حساب جديد" : "sign-up"}
                                    </Link>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            }


        </header>

    );
};

export default Navbar;
