import React from 'react';
import {useSelector} from "react-redux";


const ExamplesSlide: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;
    return (
        <>
            <div className="overflow-hidden w-full h-[120px] mt-8 mb-8">
                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="1689" height="869"
                     viewBox="0 0 1689 869" fill="none">
                    <path
                        d="M1434.73 690.236C1389.44 712.109 1336.9 725.035 1283.51 727.442L412.448 766.711C264.26 773.392 144.848 698.993 142.161 598.311L136.892 400.852C135.113 334.185 185.652 268.874 269.579 229.383L606.422 70.8845C668.615 41.6206 743.188 29.4056 813.887 36.902L1465.67 106.012C1585.29 118.695 1671.29 184.909 1676.42 268.265L1687.96 456.037C1692.09 523.213 1642.68 589.81 1558.57 630.429L1434.73 690.236Z"
                        fillOpacity="0.34"/>
                    <path
                        d="M1434.73 690.236C1389.44 712.109 1336.9 725.035 1283.51 727.442L412.448 766.711C264.26 773.392 144.848 698.993 142.161 598.311L136.892 400.852C135.113 334.185 185.652 268.874 269.579 229.383L606.422 70.8845C668.615 41.6206 743.188 29.4056 813.887 36.902L1465.67 106.012C1585.29 118.695 1671.29 184.909 1676.42 268.265L1687.96 456.037C1692.09 523.213 1642.68 589.81 1558.57 630.429L1434.73 690.236Z"
                        fill="url(#paint0_linear)"/>
                    <path
                        d="M149.393 325.427C182.318 294.91 226.747 270.85 277.277 256.171L1101.73 16.6758C1241.99 -24.0678 1395.02 15.7713 1448.12 106.85L1552.24 285.476C1587.4 345.785 1571.17 417.095 1509.64 472.694L1262.69 695.846C1217.09 737.048 1150.95 765.615 1078.67 775.322L412.37 864.813C290.09 881.237 173.543 841.039 126.775 766.311L21.4263 597.977C-16.2627 537.755 -1.77294 465.537 59.3695 408.867L149.393 325.427Z"
                        fillOpacity="0.34"/>
                    <path
                        d="M149.393 325.427C182.318 294.91 226.747 270.85 277.277 256.171L1101.73 16.6758C1241.99 -24.0678 1395.02 15.7713 1448.12 106.85L1552.24 285.476C1587.4 345.785 1571.17 417.095 1509.64 472.694L1262.69 695.846C1217.09 737.048 1150.95 765.615 1078.67 775.322L412.37 864.813C290.09 881.237 173.543 841.039 126.775 766.311L21.4263 597.977C-16.2627 537.755 -1.77294 465.537 59.3695 408.867L149.393 325.427Z"
                        fill="url(#paint1_linear)"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="912.027" y1="799.108" x2="1193.15" y2="46.0319"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFE4BB"/>
                            <stop offset="1" stopColor="#FFD7A7" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="912.027" y1="799.108" x2="1193.15" y2="46.0319"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFE4BB"/>
                            <stop offset="1" stopColor="#FFD7A7" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="flex flex-col items-center justify-center my-10 w-screen">
                <h1 className="text-5xl pb-5 text-center">{lang === "AR" ? "على استعداد للبدء؟" : "Ready to get started?"}</h1>
                <button
                    className="btn btn-primary text-primary-content px-10">{lang === "AR" ? "ابنى سيرتي الذاتية" : "Build my resume"}</button>
            </div>
        </>

    );
};

export default ExamplesSlide;
