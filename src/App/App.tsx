import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Page404 from "../screens/404/404";
import AuthScreen from "../screens/AuthScreen/AuthScreen";
import EditorScreen from "../screens/EditorScreen/EditorScreen";

import "./App.scss";


const App: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <Routes>
                    <Route index element={<HomeScreen/>}/>
                    <Route path="editor" element={<EditorScreen/>}/>
                    <Route path="login" element={<AuthScreen/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
