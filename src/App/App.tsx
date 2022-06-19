import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store"
import {GetUserThunk} from "../store/authSilce";
import {useCookies} from 'react-cookie';
import Navbar from "../components/Navbar/Navbar";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Page404 from "../screens/404/404";
import AuthScreen from "../screens/AuthScreen/AuthScreen";
import UserScreen from "../screens/UserScreen/UserScreen";
import UserEditScreen from "../screens/UserScreen/UserEditScreen";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import DashIndex from "../screens/DashboardScreen/components/DashIndex/DashIndex";
import DashUsers from "../screens/DashboardScreen/components/DashUsers/DashUsers";
import TemplateScreen from "../screens/DashboardScreen/components/TemplateScreen/TemplateScreen";
import FooterNav from "../components/FooterNav/FooterNav";
import DashCoverLetter from "../screens/DashboardScreen/components/DashCoverLetter/DashCoverLetter";
import DashAds from "../screens/DashboardScreen/components/DashAds/DashAds";
import ResumeTemplate from "../screens/ResumeScreen/ResumeTemplates/ResumeTemplate";
import ResumeExamples from "../screens/ResumeScreen/ResumeExamples/ResumeExamples";
import ResumeBuilder from "../screens/ResumeScreen/ResumeBuilder/ResumeBuilder";
import HomeAds from "../screens/DashboardScreen/components/DashAds/components/HomeAds/HomeAds";
import TemplatesAds from "../screens/DashboardScreen/components/DashAds/components/TemplatesAds/TemplatesAds";
import ExamplesAds from "../screens/DashboardScreen/components/DashAds/components/ExamplesAds/ExamplesAds";
import BuildAds from "../screens/DashboardScreen/components/DashAds/components/BuildAds/BuildAds";
import UserAds from "../screens/DashboardScreen/components/DashAds/components/UserAds/UserAds";
import ProfileAds from "../screens/DashboardScreen/components/DashAds/components/ProfileAds/ProfileAds";
import ProfilesScreen from "../screens/ProfilesScreen/ProfilesScreen";
import EditProfile from "../screens/UserScreen/EditProfile";
import "./App.scss";

const App: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const [cookies] = useCookies(["Authorization", "Refresh"]);

    useEffect(() => {
        // /"Authentication=" + cookies.Authorization + ";" + "Refresh=" + cookies.Refresh + ";"
        dispatch(
            GetUserThunk(cookies)
        )
        window.addEventListener("keydown", e => {
            if (e?.key === "Control" || e?.key === "p") {
                e.preventDefault();
            }
        })
    })
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <div className="min-h-[100vh]">
                    <Routes>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="login" element={<AuthScreen/>}/>
                        <Route path="me">
                            <Route index element={<UserScreen/>}/>
                            <Route path="edit" element={<UserEditScreen/>}/>
                            <Route path="profile" element={<EditProfile/>}/>
                        </Route>

                        <Route path="profiles" element={<ProfilesScreen/>}>
                            <Route path=":userName" element={<ProfilesScreen/>}/>
                        </Route>


                        <Route path="resume">
                            <Route path="templates" element={<ResumeTemplate/>}/>
                            <Route path="examples" element={<ResumeExamples/>}/>
                            <Route path="build" element={<ResumeBuilder/>}/>
                        </Route>

                        <Route path="dashboard" element={<DashboardScreen/>}>
                            <Route index element={<DashIndex/>}/>
                            <Route path="users" element={<DashUsers/>}/>
                            <Route path="templates" element={<TemplateScreen/>}/>
                            <Route path="cover-letter" element={<DashCoverLetter/>}/>
                            <Route path="ads" element={<DashAds/>}>
                                <Route index element={<HomeAds/>}/>
                                <Route path="templates" element={<TemplatesAds/>}/>
                                <Route path="examples" element={<ExamplesAds/>}/>
                                <Route path="build" element={<BuildAds/>}/>
                                <Route path="user" element={<UserAds/>}/>
                                <Route path="profile" element={<ProfileAds/>}/>
                            </Route>
                        </Route>
                        <Route path="*" element={<Page404/>}/>

                    </Routes>
                </div>
                <FooterNav/>
            </div>
        </Router>
    );
}

export default App;
