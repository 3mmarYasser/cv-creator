import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Navbar from "../components/Navbar/Navbar";
import "./App.scss";
import Page404 from "../screens/404/404";
import EditorScreen from "../screens/EditorScreen/EditorScreen";
const App:React.FC = ()=> {
  return (
      <Router>
          <div className="container">
              <Navbar/>
              <div className="">
                  <Routes>
                      <Route index element={<HomeScreen/>} />
                      <Route path="editor" element={<EditorScreen/>} />
                      <Route path="*" element={<Page404/>} />

                  </Routes>
              </div>
          </div>

      </Router>
  );
}

export default App;
