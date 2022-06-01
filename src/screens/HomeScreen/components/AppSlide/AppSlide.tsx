import React from 'react';
import {Link} from "react-router-dom";
const AppSlide :React.FC = () => {
    return (
        <div className="flex flex-col mx-auto my-5 w-screen">
            <div className="container mx-auto flex justify-center items-center space-x-5">
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

            <div className="container mx-auto flex justify-center items-center py-10 space-x-10 ">
                <div className="w-1/2">
                    <img className="w-full" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
                </div>

                    <div className="w-1/2 max-w-xl">
                        <h1 className="text-4xl mb-5">
                            The resume builder trusted by professionals
                        </h1>
                        <p className="text-neutral">
                            Create a visually stunning resume that makes recruiters want to read it and explore it. Our resume creator will guide you through the process. Focus on the content, while we take care of the formatting.
                        </p>
                        <button className="mt-5 btn btn-lg btn-primary text-primary-content">
                            Build my resume now
                        </button>
                    </div>

            </div>





        </div>
    );
};

export default AppSlide ;
