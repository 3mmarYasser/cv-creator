import React from 'react';
import MainSlide from "./components/MainSlide/MainSlide";
import AppSlide from "./components/AppSlide/AppSlide";
import TemplatesSlide from "./components/TemplatesSlide/TemplatesSlide";
import ExamplesSlide from "./components/ExamplesSlide/ExamplesSlide";
import ExtraSlide from "./components/ExtraSlide/ExtraSlide";

const HomeScreen: React.FC = () => {
    return (
        <div>
            <MainSlide/>
            <AppSlide/>
            <TemplatesSlide/>
            <ExtraSlide/>
            <ExamplesSlide/>

        </div>
    );
};

export default HomeScreen;
