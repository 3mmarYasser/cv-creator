import React from 'react';
import MainSlide from "./components/MainSlide/MainSlide";
import AppSlide from "./components/AppSlide/AppSlide";
import TemplatesSlide from "./components/TemplatesSlide/TemplatesSlide";
import ExamplesSlide from "./components/ExamplesSlide/ExamplesSlide";
import ExtraSlide from "./components/ExtraSlide/ExtraSlide";
import Ads from "../../components/Ads/Ads";

const HomeScreen: React.FC = () => {
    return (
        <div>
            <MainSlide/>
            <div className="w-screen mt-5 mb-5">
                <Ads data={{width: 1200, height: 90, id: 1}}/>
            </div>
            <AppSlide/>
            <div className="w-screen mt-5 mb-5">
                <Ads data={{width: 1200, height: 90, id: 2}}/>
            </div>
            <TemplatesSlide/>
            <div className="w-screen mt-5 mb-5">
                <Ads data={{width: 1200, height: 90, id: 3}}/>
            </div>
            <ExtraSlide/>
            <div className="w-screen mt-5 mb-5">
                <Ads data={{width: 970, height: 90, id: 4}}/>
            </div>
            <ExamplesSlide/>
            <div className="w-screen mt-5 mb-5">
                <Ads data={{width: 1200, height: 150, id: 5}}/>
            </div>
        </div>
    );
};

export default HomeScreen;
