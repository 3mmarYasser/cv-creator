import React from 'react';
import MainSlide from "./components/MainSlide/MainSlide";
import AppSlide from "./components/AppSlide/AppSlide";
const HomeScreen :React.FC = () => {
    return (
        <div>
        <MainSlide></MainSlide>
        <AppSlide/>
        </div>
    );
};

export default HomeScreen ;
