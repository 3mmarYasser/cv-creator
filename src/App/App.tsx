import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Navbar from "../components/Navbar/Navbar";
import Editor from "../components/Editor/Index/Editor";
import "./App.scss";
const App:React.FC = ()=> {
  return (
      <Router>
          <div className="container">
              <Navbar/>
              <div className="pt-[100px]">
                  <Routes>
                      <Route index element={<HomeScreen/>} />
                      <Route path="editor" element={<Editor/>} />
                      <Route path="*" element={<div>404 Page</div>} />
                  </Routes>
              </div>
          </div>

      </Router>
  );
}

export default App;
