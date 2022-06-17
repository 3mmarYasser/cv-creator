import LineCvAnimation from "../LineCvAnimetion/LineCvAnimation";
import amazonLogo from "../../../../assets/images/Amazon_logo.svg.png";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import classNames from "classnames";

const logos = [amazonLogo]
const MainSlide = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;

    return (
        <div tabIndex={0} className="bg-base-200  w-screen pt-32">
            <div className="container  mx-auto  px-5 h-[38.5rem]  sm:px-2 grid">
                <div tabIndex={1}
                     className={classNames(" max-w-[45rem] mx-auto  flex flex-col justify-center z-10 md:mx-auto md:w-full mb-20", {"lg:mr-[40rem]": lang === "EN"}, {"lg:ml-[40rem] font-bold": lang === "AR"})}>
                   <span className="uppercase opacity-80">
                       {lang === "AR" ? "منشئ سيرة ذاتية اونلاين" : "ONLINE RESUME CREATOR"}
                   </span>
                    <p className="text-4xl md:text-6xl leading-[1em] max-w-2xl my-8 md:text-[68px] font-bold">
                        {lang === "AR" ? "تعمل سيرتنا الذاتية على توظيف عملائنا في أفضل الشركات" : "Our resumes get people hired at top companies"}
                    </p>
                    <div className="flex">
                        {logos.map((logo, index) => {
                            return (
                                <div key={index} className="my-6 grayscale">
                                    <img className="w-24" src={logo} alt="provider-logo"/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex space-x-6 flex-col-reverse justify-center items-center sm:flex-row">
                        <Link to="/resume/build" className="btn btn-primary text-primary-content  m-5  sm:m-auto">
                            {lang === "AR" ? "بناء سيرتي الذاتية الآن" : "Build my resume now"}
                        </Link>
                        <div className="w-1"/>
                        <p>
                            {lang === "AR" ? `قم بإنشاء سيرة ذاتية حديثة من شأنها أن تؤدي إلى معاودة الاتصال بالمقابلة. كل الأشياء الأساسية في صفحة واحدة. سريع وسهل الاستخدام.` : "Create a modern resume that will result in interview callbacks. All key things on a single page. Fast & easy-to-use."}
                        </p>
                    </div>
                </div>
                <div tabIndex={0}
                     className={classNames("flex overflow-y-clip  absolute  top-20 w-[40rem]", {"right-0": lang === "EN"}, {"left-0": lang === "AR"})}>

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
