import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store"
import {GetUserThunk} from "../store/authSilce";
import Navbar from "../components/Navbar/Navbar";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Page404 from "../screens/404/404";
import AuthScreen from "../screens/AuthScreen/AuthScreen";
import EditorScreen from "../screens/EditorScreen/EditorScreen";
import UserScreen from "../screens/UserScreen/UserScreen";
import UserEditScreen from "../screens/UserScreen/UserEditScreen";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import DashIndex from "../screens/DashboardScreen/components/DashIndex/DashIndex";
import DashUsers from "../screens/DashboardScreen/components/DashUsers/DashUsers";
import TemplateScreen from "../screens/DashboardScreen/components/TemplateScreen/TemplateScreen";
import FooterNav from "../components/FooterNav/FooterNav";
import DashCoverLetter from "../screens/DashboardScreen/components/DashCoverLetter/DashCoverLetter";
import DashAds from "../screens/DashboardScreen/components/DashAds/DashAds";
import "./App.scss";
import GetAuth, {GetUser} from "../api/requests/GetAuth";


const App: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(
            GetUserThunk()
        )
    })
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <div className="min-h-[100vh]">
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
                            <Route path="templates" element={<TemplateScreen/>}/>
                            <Route path="cover-letter" element={<DashCoverLetter/>}/>
                            <Route path="ads" element={<DashAds/>}/>
                        </Route>
                    </Routes>
                </div>
                <FooterNav/>
            </div>
        </Router>
    );
}

export default App;
