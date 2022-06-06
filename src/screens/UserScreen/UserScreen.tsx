import React from 'react';
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, A11y} from 'swiper';

import img1 from "../../assets/images/img.png"
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

interface Props {

}

const UserScreen: React.FC<Props> = () => {
    return (
        <div className="w-[100vw]">
            <div className="pt-[120px] p-[20px] max-w-[1024px] m-auto">
                <div className="flex justify-between w-[100%]">
                    <h1 className="text-2xl">Hey UserName! Great to see you again!</h1>
                    <button className="btn btn-circle btn-outline btn-primary"><i className="material-icons">add</i>
                    </button>
                </div>
                <div className="flex mt-[50px] justify-center items-center flex-col-reverse lg:flex-row">

                    <div className="w-[50%] md:w-[100%] flex justify-center items-center">
                        <div className="max-w-[350px] max-h-[450px]">
                            <Swiper
                                modules={[Navigation, A11y]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                scrollbar={{draggable: true}}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <div className="m-auto bg-base-100 w-[300px] max-h-[420px] shadow-xl">
                                        <div
                                            className="relative m-auto flex flex-col justify-center w-[260px] max-h-[400px] shadow-2xl">
                                            <button
                                                className="absolute bottom-[20px] left-50% btn btn-circle btn-success m-auto">
                                                <i className="material-icons">edit</i>
                                            </button>
                                            <div className="flex flex-col place-items-center">
                                                <img alt={'UserCvImage'}
                                                     draggable={false}
                                                     onContextMenu={e => e.preventDefault()}
                                                     src={img1}
                                                     className="max-w-sm rounded-lg  w-[100%] h-[100%]"/>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="m-auto bg-base-100 w-[300px] max-h-[420px] shadow-xl">
                                        <div
                                            className="relative m-auto flex flex-col justify-center w-[260px] max-h-[400px] shadow-2xl">
                                            <button
                                                className="absolute bottom-[20px] left-50% btn btn-circle btn-success m-auto">
                                                <i className="material-icons">edit</i>
                                            </button>
                                            <div className="flex flex-col place-items-center">
                                                <img alt={'UserCvImage'}
                                                     draggable={false}
                                                     onContextMenu={e => e.preventDefault()}
                                                     src={img1}
                                                     className="max-w-sm rounded-lg  w-[100%] h-[100%]"/>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="m-auto bg-base-100 w-[300px] max-h-[420px] shadow-xl">
                                        <div
                                            className="relative m-auto flex flex-col justify-center w-[260px] max-h-[400px] shadow-2xl">
                                            <button
                                                className="absolute bottom-[20px] left-50% btn btn-circle btn-success m-auto">
                                                <i className="material-icons">edit</i>
                                            </button>
                                            <div className="flex flex-col place-items-center">
                                                <img alt={'UserCvImage'}
                                                     draggable={false}
                                                     onContextMenu={e => e.preventDefault()}
                                                     src={img1}
                                                     className="max-w-sm rounded-lg  w-[100%] h-[100%]"/>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </div>

                    </div>

                    <div className="w-[50%] md:w-[100%]">
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://api.lorem.space/image/face?w=300&h=400" alt="Shoes"
                                     className="rounded-xl"/>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">UserName!</h2>
                                <div className="card-actions">
                                    <Link to="/me/edit">
                                        <button className="btn btn-primary">Edit know</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default UserScreen;
