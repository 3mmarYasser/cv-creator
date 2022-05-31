import LineCvAnimation from "../LineCvAnimetion/LineCvAnimation";

const MainSlide = () => {
    return (
        <div tabIndex={0} className="bg-base-200  w-screen pt-32">
           <div className="container  mx-auto flex px-2 h-[38.5rem]">
               <div className="w-full ml-12 mr-[40vw] ">
                   <span className="uppercase opacity-80">ONLINE RESUME CREATOR</span>
                   <p className="text-[68px] leading-[1em] max-w-2xl p-5">
                       Our resumes get people hired at top companies
                   </p>
               </div>
                <div className="flex overflow-y-clip  absolute right-0 top-0 pt-20  w-[40vw]">
                    <div className="flex justify-center relative h-[41.5rem]  rotate-[-21deg]">
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
