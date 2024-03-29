import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Ads from "../../../../components/Ads/Ads";

const ExtraSlide: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;
    return (
        <div className="w-screen">
            <div id={"resume_examples"}
                 className="container  mx-auto flex flex-col sm:flex-row justify-center items-center sm:py-10 ">
                <div className="p-8">
                    <img width="400px"
                         style={{"filter": "drop-shadow(-23px 23px 3px #00000038)"}}
                         draggable={false}
                         onContextMenu={e => e.preventDefault()}
                         src="https://enhancv.com/static/9537e31eb4763c85c2eaecde6bd0a7ea/3c17d/enhancv-resume-examples%402x.png"
                         alt=""/>
                </div>

                <div className="max-w-xl my-10 w-full mx-auto sm:mx-1  p-10 sm:p-0 pt-0">
                    <h1 className="text-2xl mb-5 md:text-4xl">
                        {lang === "AR" ? "أمثلة السيرة الذاتية المهنية حسب الصناعة والمسمى الوظيفي" : "Professional resume examples by industry and job title"}
                    </h1>
                    <p className="opacity-75">
                        {lang === "AR" ? `أطلق العنان للإمكانات الكاملة لحياتك المهنية من خلال عينات السيرة الذاتية التي تم فحصها بشكل احترافي. سنعرض لك نوع اللغة المستخدمة في مجالك ، مع توضيح أمثلة من الحياة الواقعية. تعرف على ما يصلح لكل وظيفة وابني سيرتك الذاتية عليها.` : `Unleash the full potential of your career with professionally vetted resume samples. We’ll show
                        you the type of language used in your field, illustrated with real-life examples. See what works
                        for each job and build your resume off it.`}
                    </p>
                    <Link to="/resume/examples" className="mt-5 btn btn-md btn-primary text-primary-content">
                        {lang === "AR" ? "عرض جميع الأمثلة على السيرة الذاتية" : "View all resume examples"}
                    </Link>
                </div>

            </div>
            <div className="w-screen">
                <Ads data={{width: 970, height: 90, id: 3}}/>
            </div>
            <div id={"resume_proofreading"}
                 className="container mx-auto  flex flex-col sm:flex-row-reverse justify-center items-center sm:py-10 ">
                <div className="p-4">
                    <img width="300px"
                         style={{"filter": "drop-shadow(-23px 23px 3px #00000038)"}}
                         draggable={false}
                         onContextMenu={e => e.preventDefault()}
                         src="https://enhancv.com/static/23b437129404197e051140e117f7a112/8b553/enhancv-content-improvement%402x.png"
                         alt=""/>
                </div>

                <div className="max-w-xl my-10 w-full mx-auto sm:mx-1  p-10 sm:p-0 pt-0">
                    <h1 className="text-2xl md:text-4xl mb-5 lg:text-4xl">
                        {lang === "AR" ? "تخلص من الأخطاء المكلفة بمفتاح واحد" : "Eliminate costly mistakes with a single switch"}

                    </h1>
                    <p className="opacity-75">
                        {lang === "AR" ? `باستخدام أداة تحليل المحتوى ، لن تدع الأخطاء أو الأخطاء المطبعية تكلفك المهمة. ستقوم أيضًا بحذف العبارات المبتذلة والتكرار والصياغة الغامضة والعبارات التي لا تركز على الأداء.` : ` With our content analyzer tool, you won’t let mistakes or typos cost you the job. You’ll also
                        cut out cliches, repetition, vague wording, and phrases that are not performance-oriented.`}
                    </p>
                    <Link to="/resume/build" className="mt-5 btn btn-md btn-primary text-primary-content">
                        {lang === "AR" ? "بناء سيرة ذاتية خالية من الأخطاء" : "Build a mistake-free resume"}
                    </Link>
                </div>

            </div>
            <div id={"career_counseling"} className="w-screen bg-base-300">
                <div className="container  mx-auto flex flex-col sm:flex-row justify-center items-center sm:py-10 ">
                    <div className="p-8">
                        <img width="300px"
                             style={{"filter": "drop-shadow(-23px 23px 3px #00000038)"}}
                             draggable={false}
                             onContextMenu={e => e.preventDefault()}
                             src="https://enhancv.com/static/837513daf82f0ce8d3a4e7f03b9a2b4f/ee604/cc-image.png"
                             alt=""/>
                    </div>
                    <div className="max-w-xl my-10 w-full flex flex-col items-center mx-auto sm:mx-1  p-10 sm:p-0 pt-0">
                        <h1 className="text-2xl md:text-4xl mb-5 lg:text-4xl font-bold">
                            {lang === "AR" ? "لست مضطرًا للتعامل مع البحث عن وظيفة بمفردك" : "You don’t have to deal with the job search alone"}
                        </h1>
                        <p className="opacity-75">
                            {lang === "AR" ? `تواصل مع فريقنا على الإنترنت ، وشارك أهدافك المهنية ، وسنساعدك في كل جزء من بحثك عن وظيفة. استئناف وكتابة رسالة الغلاف شيك. الإعدادية للمقابلة؟ يفحص. مساعدة في البحث عن وظيفة؟ تحقق.` : `  Get on-line with our team, share your career goals, and we’ll help you with every part of
                            your job search. Resume & cover letter writing? Check. Interview prep? Check. Job search
                            help? Check.`}
                        </p>
                        <h1 className="text-2xl md:text-4xl mt-5 lg:text-2xl opacity-75 font-bold">
                            {lang === "AR" ? "اختر إحدى الخدمات لمعرفة المزيد" : "Pick one of the services to learn more"}
                        </h1>
                        <div className="flex flex-col md:flex-row mt-5">
                            <Link to="/resume/build"
                                  className="shadow hover:shadow-2xl flex md:mr-3 flex-col justify-center items-center bg-base-100 mt-2 w-full md:w-[150px] pt-5 pb-5 border-t-accent border-t-4 ">
                                <img width="50px"
                                     draggable={false}
                                     onContextMenu={e => e.preventDefault()}
                                     src="https://enhancv.com/static/c3618aa785b83bcf93106d48afb722d6/b3779/ccs-resume-write.png"
                                     alt=""/>
                                <span className="mt-5">{lang === "AR" ? "كتابة سيرة ذاتية" : "Resume Writing"}</span>
                            </Link>
                            <Link to="/resume/examples"
                                  className="shadow hover:shadow-2xl flex  md:mr-3  flex-col justify-center items-center bg-base-100 mt-2 w-full md:w-[150px] pt-5 pb-5 border-t-secondary border-t-4 ">
                                <img width="50px"
                                     draggable={false}
                                     onContextMenu={e => e.preventDefault()}
                                     src="https://enhancv.com/static/c2e4dc3f3899fd7909c718ae5ec76a40/b3779/ccs-resume-review.png"
                                     alt=""/>
                                <span
                                    className="mt-5">{lang === "AR" ? "أمثلة السيرة الذاتية" : "Resume Examples"}</span>
                            </Link>

                            <Link to="/cover-letter"
                                  className="shadow hover:shadow-2xl flex  md:mr-3  flex-col justify-center items-center bg-base-100 mt-2 w-full md:w-[150px] pt-5 pb-5 border-t-warning border-t-4 ">
                                <img width="50px"
                                     draggable={false}
                                     onContextMenu={e => e.preventDefault()}
                                     src="https://enhancv.com/static/62472c3f00667258fea3ba0f76d5d957/b3779/ccs-cover-letter-write.png"
                                     alt=""/>
                                <span className="mt-5">{lang === "AR" ? "خطاب تلقائى" : "Cover Letter"}</span>
                            </Link>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ExtraSlide;
