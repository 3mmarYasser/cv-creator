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
        <div className="pt-[150px] w-[100vw]">
            <div className="bg-base-100">
                <div className="container mx-auto my-5 p-5">
                    <div className="flex flex-col-reverse justify-center items-center md:flex-row  no-wrap md:-mx-2 ">

                        <div className="w-full md:w-9/12 mx-2 ">

                            <div className="bg-base-300 rounded-xl p-3 shadow-sm">
                                <div className="flex items-center mb-[10px] space-x-2 font-semibold leading-8">

                        <span className="text-primary flex justify-center items-center">
                            <i className="material-icons">person</i>
                        </span>
                                    <span className="tracking-wide text-primary">About</span>
                                </div>

                                <div className="text-primary mb-[30px]">
                                    <div className="grid gap-y-3 md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">First Name :</div>
                                            <div className="px-4 py-2 text-gray-600 ">Jane</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Last Name :</div>
                                            <div className="px-4 py-2 text-gray-600 ">Doe</div>
                                        </div>

                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Email :</div>
                                            <div className="px-4 py-2">
                                                <a rel="noreferrer" className="text-gray-600 "
                                                   href="mailto:email@example.com" target="_blank">email@example.com</a>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">User Name :</div>
                                            <div className="px-4 py-2 text-gray-600 ">Ammar</div>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/me/edit">
                                    <span
                                        className="block text-center w-full text-success text-sm font-semibold rounded-lg hover:bg-base-100 focus:outline-none focus:shadow-outline focus:bg-base-100 hover:shadow-xs p-3 my-4">Edit Know</span>
                                </Link>
                            </div>

                            <div className="my-4"></div>

                            <div className="bg-base-300 p-3 shadow-sm rounded-xl">

                                <div className="">
                                    <div
                                        className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span className="text-primary">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                </span>
                                        <span className="tracking-wide text-primary">Resumes</span>
                                    </div>
                                    <div className="max-w-[100%] overflow-hidden">
                                        <Swiper
                                            modules={[Navigation, A11y]}
                                            spaceBetween={0}
                                            breakpoints={{
                                                1024: {
                                                    slidesPerView: 1,
                                                },
                                                1280: {
                                                    slidesPerView: 2,
                                                },
                                                1530: {
                                                    slidesPerView: 3,
                                                },
                                                1551: {
                                                    slidesPerView: 4,
                                                }
                                            }}

                                            navigation
                                            scrollbar={{draggable: true}}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                        >
                                            <SwiperSlide>
                                                <div
                                                    className="m-auto">
                                                    <div
                                                        className="relative m-auto flex flex-col justify-center w-[260px] max-h-[400px] shadow-2xl">
                                                        <button
                                                            style={{transform: "translate(-50% , 0)"}}
                                                            className="absolute bottom-[5px] left-[50%] btn btn-circle btn-success m-auto no-animation">
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
                                                <div
                                                    className="m-auto">
                                                    <div
                                                        className="relative m-auto flex flex-col justify-center w-[260px] max-h-[400px] shadow-2xl">
                                                        <button
                                                            style={{transform: "translate(-50% , 0)"}}
                                                            className="absolute bottom-[5px] left-[50%] btn btn-circle btn-success m-auto no-animation">
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
                                                <div
                                                    className="m-auto">
                                                    <div
                                                        className="relative m-auto flex flex-col justify-center w-[260px] max-h-[400px] shadow-2xl">
                                                        <button
                                                            style={{transform: "translate(-50% , 0)"}}
                                                            className="absolute bottom-[5px] left-[50%] btn btn-circle btn-success m-auto no-animation">
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
                                                <div
                                                    className="m-auto">
                                                    <div
                                                        className="relative m-auto flex flex-col justify-center w-[260px] max-h-[400px] shadow-2xl">
                                                        <button
                                                            style={{transform: "translate(-50% , 0)"}}
                                                            className="absolute bottom-[5px] left-[50%] btn btn-circle btn-success m-auto no-animation">
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
                                                <div
                                                    className="m-auto">
                                                    <div
                                                        className="relative m-auto flex flex-col justify-center w-[260px] max-h-[400px] shadow-2xl">
                                                        <button
                                                            style={{transform: "translate(-50% , 0)"}}
                                                            className="absolute bottom-[5px] left-[50%] btn btn-circle btn-success m-auto no-animation">
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
                                                <div
                                                    className="m-auto">
                                                    <div
                                                        className="relative m-auto flex flex-col justify-center w-[260px] max-h-[400px] shadow-2xl">
                                                        <button
                                                            style={{transform: "translate(-50% , 0)"}}
                                                            className="absolute bottom-[5px] left-[50%] btn btn-circle btn-success m-auto no-animation">
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
                                                <div
                                                    className="m-auto">
                                                    <div
                                                        className="relative m-auto flex flex-col justify-center w-[260px] max-h-[400px] shadow-2xl">
                                                        <button
                                                            style={{transform: "translate(-50% , 0)"}}
                                                            className="absolute bottom-[5px] left-[50%] btn btn-circle btn-success m-auto no-animation">
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
                                                <div
                                                    className="m-auto">
                                                    <div
                                                        className="relative m-auto flex flex-col justify-center w-[260px] max-h-[400px] shadow-2xl">
                                                        <button
                                                            style={{transform: "translate(-50% , 0)"}}
                                                            className="absolute bottom-[5px] left-[50%] btn btn-circle btn-success m-auto no-animation">
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
                            </div>
                        </div>

                        <div className="w-full md:w-3/12 md:mx-2 mb-[20px]">
                            <div className="bg-base-300 rounded-xl p-3 border-t-4 border-primary">
                                <div className="image overflow-hidden">
                                    <img draggable={false} onContextMenu={(e) => e.preventDefault()}
                                         onSelect={(e) => e.preventDefault()}
                                         className="h-auto m-auto rounded-xl w-full max-w-[300px] max-h-[300]"
                                         src="https://api.lorem.space/image/face?w=300&h=300"
                                         alt=""/>
                                </div>
                                <h1 className="text-primary font-bold text-xl leading-8 my-1">Jane Doe</h1>
                                <h3 className="text-gray-600 font-lg  text-semibold leading-6">User</h3>
                                <ul
                                    className="bg-base-200 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-4">
                                        <span>Status</span>
                                        <span className="ml-auto"><span
                                            className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                    </li>

                                    <li className="flex items-center py-4">
                                        <span>Member since</span>
                                        <span className="ml-auto">May 07, 2022</span>
                                    </li>

                                    <li className="flex items-center py-4">
                                        <span>Your Profile Views</span>
                                        <span className="ml-auto">1579</span>
                                    </li>
                                    <li className="flex items-center py-4">
                                        <span>Cover Letter Number</span>
                                        <span className="ml-auto">2</span>
                                    </li>
                                    <li className="flex items-center py-4">
                                        <span>Resume Numbers</span>
                                        <span className="ml-auto">8</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserScreen;
