import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GitHub from './components/GitHub';
import Battle from './components/Battle';


ReactDOM.render(

  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />}> </Route>

      <Route path="/GitHub" element={<GitHub />}></Route>

      <Route path="/Battle" element={<Battle />}></Route>




    </Routes>
  </BrowserRouter>, document.getElementById('root')

);


