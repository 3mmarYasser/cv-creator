import React from 'react';
import MainSlide from "./components/MainSlide/MainSlide";
import AppSlide from "./components/AppSlide/AppSlide";
import TemplatesSlide from "./components/TemplatesSlide/TemplatesSlide";

const HomeScreen: React.FC = () => {
    return (
        <div>
            <MainSlide></MainSlide>
            <AppSlide/>
            <TemplatesSlide/>
        </div>
    );
};

export default HomeScreen;
