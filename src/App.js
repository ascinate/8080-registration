import react from "react";
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter as Router , Routes, Route, Outlet,Switch, useLocation} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import PreLogin from "./pages/register/PreLogin";
import Footer from "../src/Footer";
import WebFont from 'webfontloader';

function App() {

  WebFont.load({
    custom: {
      families: ['FuturaBoldfont'],
      families: ['futuramediumbt'],
      families: ['PuntaExtrabold'],
      families: ['FuturaMedium'],
      families: ['FuturaBold'],
      families: ['AvenirBlack'],
      families: ['futuramediumitalic'],
      families: ['PuntaRegular'],
      families: ['LEMONMILKRegular'],
    },
  });
  return (
    <div className="App">
        <Router>
           
             <Routes>
               
                  <Route excaexact="true" path="/" element={<PreLogin/>}/>
                  
                  
                
                  
             </Routes>
             <Footer/> 
             
        </Router>
    </div>
  );
}

export default App;
