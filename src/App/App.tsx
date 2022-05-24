import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Navbar from "../components/Navbar/Navbar";
import "./App.scss";
const App:React.FC = ()=> {
  return (
      <Router>
          <div className="container">
              <Navbar/>
              <div className="">
                  <Routes>
                      <Route index element={<HomeScreen/>} />
                      <Route path="*" element={<div>404 Page</div>} />
                  </Routes>
              </div>
          </div>

      </Router>
  );
}

export default App;
