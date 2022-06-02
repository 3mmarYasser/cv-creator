import LineCvAnimation from "../LineCvAnimetion/LineCvAnimation";
import amazonLogo from "../../../../assets/images/Amazon_logo.svg.png";
import {Link} from "react-router-dom";
const logos = [amazonLogo]
const MainSlide = () => {
    return (
        <div tabIndex={0} className="bg-base-200  w-screen pt-32">
           <div className="container  mx-auto  px-5 h-[38.5rem]  sm:px-2 grid">
               <div tabIndex={1} className=" max-w-[45rem] mx-auto lg:mr-[40rem]  flex flex-col justify-center z-10 md:mx-auto md:w-full mb-20">
                   <span className="uppercase opacity-80">ONLINE RESUME CREATOR</span>
                   <p className="text-[50px] leading-[1em] max-w-2xl my-8 md:text-[68px]">
                       Our resumes get people hired at top companies
                   </p>
                   <div className="flex">
                       {logos.map((logo, index) => {
                            return (
                                 <div key={index} className="my-6 grayscale" >
                                      <img className="w-24" src={logo} alt="provider-logo"/>
                                 </div>
                            )
                          })}
                   </div>
                   <div className="flex space-x-6 flex-col-reverse justify-center items-center sm:flex-row">
                       <Link to="editor" className="btn btn-primary text-primary-content m-5 sm:m-auto">Build my resume now</Link>
                       <p>
                           Create a modern resume that will result in interview callbacks. All key things on a single page. Fast & easy-to-use.
                       </p>
                   </div>
               </div>
               <div tabIndex={0}  className="flex overflow-y-clip  absolute right-0 top-20 w-[40rem]">
                    <div className="flex justify-center relative h-[41.5rem]  w-[40rem]  rotate-[-21deg]">
                        <LineCvAnimation/>
                        <LineCvAnimation/>
                        <LineCvAnimation/>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default MainSlide;
