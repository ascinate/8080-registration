import React, {useRef, useState} from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight, BsFillCircleFill  } from "react-icons/bs";

function Header(){
    const [isActive, setActive] = useState("false");
    const handleclick = () => {
        setActive(!isActive);
      };

      const addclass=()=>{
        document.querySelector("#main-total").classList.add('new-show-socal-div');
    }

    return(
        <>
          <section className="top-sec-bar comon-page float-start w-100">
              <div className="container">
                 <div className="top-inside-div">
                     <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                         <div className="col">
                            <NavLink to="/">
                                <img src="images/logo.png" alt="logo"/>
                            </NavLink>
                         </div>
                         <div className="col d-lg-flex justify-content-lg-end">
                            <button type="button" className="btn comon-btn-ree funt-btn" onClick={addclass}>
                                  Connect Wallet <BsArrowRight/>
                             </button>
                            
                             <button type="button" className="btn active-id-btn">
                                <span className="icon-n3"> <BsFillCircleFill/> </span>   0x2ec….9bb6
                             </button>
                            
                         </div>
                     </div>
                 </div>
              </div>
          </section>
        </>
    )
};

export default Header;