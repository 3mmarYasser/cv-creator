import React from 'react';
import {FreeMode, A11y, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {fakeTemplates} from "../../../../fake/fakeTemplate";
import Ads from "../../../../components/Ads/Ads";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";
import "swiper/scss/autoplay"

const TemplatesSlide: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;
    const templates = fakeTemplates.map((template, index) => {
        if (Number.isInteger(index / 3)) {
            return (
                <>
                    <SwiperSlide key={index * 0.57}>
                        <div
                            className="hover:text-primary cursor-pointer my-3 flex flex-col justify-center items-center">
                            <Ads data={{width: 250, height: 360, id: 123}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide key={template.id + index * 5.96}>
                        <Link to="#"
                              className="hover:text-primary cursor-pointer flex flex-col justify-center items-center">
                            <img src={template.imagePath} alt="slide"
                                 className="object-cover w-full max-w-[250px] my-3 drop-shadow-lg"/>
                            <p>{template.title}</p>
                        </Link>
                    </SwiperSlide>
                </>
            )
        }
        return (
            <SwiperSlide key={template.id * 0.38}>
                <Link to="#"
                      className="hover:text-primary cursor-pointer flex flex-col justify-center items-center">
                    <img src={template.imagePath} alt="slide"
                         className="object-cover w-full max-w-[250px] my-3 drop-shadow-lg"/>
                    <p>{template.title}</p>
                </Link>
            </SwiperSlide>
        )
    })

    return (
        <div id={"resume_template"} className="flex w-screen items-center flex-col relative h-[904px] z-0">

            <svg width="2583" className="absolute -z-10  h-full fill-primary" height="904" viewBox="0 0 2583 904"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="30" className="opacity-30"
                      d="M2076.64 898.304C2001.94 906.888 1919.58 904.023 1839.57 890.059L534.047 662.218C311.949 623.457 160.373 510.031 190.958 405.48L250.942 200.433C271.194 131.204 368.583 79.4865 506.629 64.6529L1060.69 5.11746C1162.98 -5.87472 1277.79 4.51051 1380.08 34.0095L2323.14 305.964C2496.21 355.873 2601.04 450.576 2580.02 538.029L2532.67 735.029C2515.73 805.507 2419.57 858.896 2280.86 874.836L2076.64 898.304Z"

                />
                <path opacity="20" className="opacity-25"
                      d="M295.383 126.58C354.698 105.282 428.86 94.1796 508.851 94.6215L1813.99 101.832C2036.02 103.059 2249.33 191.236 2296.8 301.419L2389.92 517.513C2421.36 590.471 2372.8 658.937 2262.44 697.265L1819.52 851.094C1737.74 879.496 1629.83 888.553 1519.29 876.292L500.248 763.26C313.233 742.516 154.163 665.206 110.452 573.816L11.9889 367.948C-23.2366 294.299 23.0525 224.362 133.202 184.812L295.383 126.58Z"
                />
            </svg>


            <div className="flex container mx-auto p-10 w-fit  mt-24 md:mt-32 flex-col lg:flex-row">


                <h2 className="text-2xl md:text-5xl font-bold max-w-md text-primary-content mb-10 border-b-primary md:border-b-4 md:pb-4 text-base-100">
                    {lang === "AR" ? "قوالب سيرة ذاتية مصممة خصيصا لك" : "Resume templates tailored for you"}
                </h2>
                <p className="mt-auto h-fit max-w-xl text-base-content mb-4 mx-5">
                    {lang === "AR" ? "سلط الضوء على أفضل أصولك من خلال التواصل الاقتصادي. تقليدية أو إبداعية - اختر ما يناسبك ، سيرتك الذاتية ستفوز دائمًا اهزم الحظ." : " Highlight your best assets through economical communication. Traditional or creative - take your pick. Your resume will always beat luck."}
                </p>
            </div>
            <div className="w-screen" style={{direction: "ltr"}}>


                <Swiper
                    slidesPerView={7}
                    spaceBetween={30}
                    direction={'horizontal'}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, A11y, Autoplay]}
                    className="mySwiper  by-10"
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: -1,
                        disableOnInteraction: false,
                        waitForTransition: false,
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
                    {templates}
                </Swiper>
            </div>
        </div>
    );
};

export default TemplatesSlide;
