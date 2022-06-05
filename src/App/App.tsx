import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Page404 from "../screens/404/404";
import AuthScreen from "../screens/AuthScreen/AuthScreen";
import EditorScreen from "../screens/EditorScreen/EditorScreen";
import UserScreen from "../screens/UserScreen/UserScreen";
import UserEditScreen from "../screens/UserScreen/UserEditScreen";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import "./App.scss";
import DashIndex from "../screens/DashboardScreen/components/DashIndex/DashIndex";
import DashUsers from "../screens/DashboardScreen/components/DashUsers/DashUsers";

const App: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <Navbar/>

                <Routes>
                    <Route index element={<HomeScreen/>}/>
                    <Route path="editor" element={<EditorScreen/>}/>
                    <Route path="login" element={<AuthScreen/>}/>
                    <Route path="me">
                        <Route index element={<UserScreen/>}/>
                        <Route path="edit" element={<UserEditScreen/>}/>
                    </Route>
                    <Route path="*" element={<Page404/>}/>


                    <Route path="dashboard" element={<DashboardScreen/>}>
                        <Route index element={<DashIndex/>}/>
                        <Route path="users" element={<DashUsers/>}/>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
