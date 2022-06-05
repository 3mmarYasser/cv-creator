import React from 'react';
import MainSlide from "./components/MainSlide/MainSlide";
import AppSlide from "./components/AppSlide/AppSlide";
import TemplatesSlide from "./components/TemplatesSlide/TemplatesSlide";
import ExamplesSlide from "./components/ExamplesSlide/ExamplesSlide";

const HomeScreen: React.FC = () => {
    return (
        <div>
            <MainSlide/>
            <AppSlide/>
            <TemplatesSlide/>
            <ExamplesSlide/>
        </div>
    );
};

export default HomeScreen;
