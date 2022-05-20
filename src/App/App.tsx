import React from 'react';
import "./App.scss"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
const App:React.FC = ()=> {
  return (
      <Router>
          <Routes>
              <Route index element={<div>Home Page</div>} />
              <Route path="*" element={<div>404 Page</div>} />
          </Routes>
      </Router>
  );
}

export default App;
