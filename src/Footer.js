import React from "react";
import { NavLink } from "react-router-dom";
import FooterLogo from "../src/images/8080logo3.png";


function Footer(){
    return(
        <>
         <footer className="float-start w-100 py-5 ft-new">
            <div className="container">
                <div className="col-lg-8 text-center d-block mx-auto">
                     <h3 className="text-white mb-0"> Powered by </h3>
                     <NavLink to="/" className="footer-lg">
                         <img src={FooterLogo} alt="logo"/>
                     </NavLink>
                     <p className="text-white mb-0 recive-text1"> All Rights Reserved</p>
                </div>
            </div>
         </footer>
        </>
    )
};
export default Footer;