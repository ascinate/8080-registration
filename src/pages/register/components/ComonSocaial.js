import React from "react";
import { BsArrowRight, BsXLg ,BsX } from "react-icons/bs";
import { FaTwitter, FaGlobe, FaDiscord } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function ComonSocaial(){
    const navRefnext = React.useRef(null);
    const navRefnextT = React.useRef(null);

    const onShowC = (e) => {
        navRefnext.current.classList.add("show-connntect-cord1");
        document.querySelector("#gen-div").classList.add('register-show');
    };

    const onShowC2 = (e) => {
        navRefnext.current.classList.remove("show-connntect-cord1");
    };

    const onShowT = (e) => {
        navRefnextT.current.classList.add("show-connntect-twit1");
        document.querySelector("#gen-div").classList.add('register-show');
    };

    const onShowT2 = (e) => {
        navRefnextT.current.classList.remove("show-connntect-twit1");
    };

   

    
    return(
        <>
        <div className="inside-cosl mt-4">
            <div className="row row-cols-1 row-cols-lg-2 gy-4 gy-lg-0">
              <div className="col">
                
                    <div className="comon-pre-bn" ref={navRefnext}>
                        <div className="discord-div comon-sc-f">
                            <div className="d-flex justify-content-between w-100">
                                <button type="button" className="btn w-100" onClick={onShowC}>
                                <span className="sc-mn-icon">  <FaDiscord/>  </span>
                                <span className="btn comon-btn-ree"> Connect your Discord </span> 
                                </button>
                            </div>
                        </div>

                        <div className="discord-div2 text-center comon-sc-v">
                            <span className="iconm1">  <FaDiscord/> </span>
                            <NavLink to="/"> <b> User#1234 </b> Connected </NavLink>
                            <button type="button" className="clos btn" onClick={onShowC2}> <BsX/> </button>
                        </div>
                    </div>
              </div>

              <div className="col">
                <div className="comon-pre-bn" ref={navRefnextT}>
                    <div className="twitw-div1 comon-sc-f">
                        <div className="d-flex justify-content-between w-100">
                            <button type="button" className="btn w-100" onClick={onShowT}>
                            <span className="sc-mn-icon"> <FaTwitter/> </span> 
                            <span className="btn comon-btn-ree"> Connect your Twitter </span> 
                            </button>
                        </div>
                    </div>

                    <div className="twi-div text-center comon-sc-v">
                        <span className="iconm1">  <FaTwitter/> </span>
                        <NavLink to="/"> <b>  @username </b> Connected </NavLink> 
                        <button type="button" className="clos btn" onClick={onShowT2}> <BsX/> </button>
                    </div>
                </div>
              </div>


            </div>
        </div>
        </>
    );
}

export default ComonSocaial;