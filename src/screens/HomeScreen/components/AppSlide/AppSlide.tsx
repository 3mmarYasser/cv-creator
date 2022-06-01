import React from 'react';
import {Link} from "react-router-dom";
const AppSlide :React.FC = () => {
    return (
        <div className="flex flex-col mx-auto my-5 w-screen">
            <div className="container mx-auto  justify-center items-center space-x-5 hidden sm:flex">
             <Link className="px-5 flex flex-col justify-center items-center border-b-4 border-ghost hover:border-primary hover:text-primary transition duration-300" to={"#"}>
                 <b className="text-xl">Resume Builder</b>
                 <span className="my-1 font-light">Make a stand-out resume</span>
             </Link>

                <Link className="px-5 flex flex-col justify-center items-center border-b-4 border-ghost hover:border-primary hover:text-primary transition duration-300" to={"#"}>
                    <b className="text-xl">Resume Builder</b>
                    <span className="my-1 font-light">Make a stand-out resume</span>
                </Link>

                <Link className="px-5 flex flex-col justify-center items-center border-b-4 border-ghost hover:border-primary hover:text-primary transition duration-300" to={"#"}>
                    <b className="text-xl">Resume Builder</b>
                    <span className="my-1 font-light">Make a stand-out resume</span>
                </Link>


            </div>

            <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center py-10">
                <div className="p-8">
                    <img  width="600px" src="https://enhancv.com/static/72b8926bde7ba27c488e369a217b32b6/db955/enhancv-resume-builder%402x.png" alt=""/>
                </div>

                    <div className="max-w-xl my-10 w-full mx-auto sm:mx-1  p-10 sm:p-0 pt-0">
                        <h1 className="text-4xl mb-5 lg:text-6xl">
                            The resume builder trusted by professionals
                        </h1>
                        <p className="opacity-75">
                            Create a visually stunning resume that makes recruiters want to read it and explore it. Our resume creator will guide you through the process. Focus on the content, while we take care of the formatting.
                        </p>
                        <button className="mt-5 btn btn-md btn-primary text-primary-content">
                            Build my resume now
                        </button>
                    </div>

            </div>





        </div>
    );
};

export default AppSlide ;
