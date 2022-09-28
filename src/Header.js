import React, {useRef, useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight, BsFillCircleFill  } from "react-icons/bs";

function Header(){

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);
    
    const [isActive, setActive] = useState("false");
    const handleclick = () => {
        setActive(!isActive);
      };

      const addclass=()=>{
        document.querySelector("#main-total").classList.add('new-show-socal-div');
    }

    return(
        <>
        <section className={scroll ? "full-with" : "fixed-with"}>
          <div className="top-sec-bar navbar-fixed-top comon-page float-start w-100">
              <div className="container">
                 <div className="top-inside-div">
                     <div className="row row-cols-2 row-cols-lg-2 align-items-center">
                         <div className="col">
                            <NavLink to="/">
                                <img src="images/logo.png" alt="logo"/>
                            </NavLink>
                         </div>
                         <div className="col d-flex justify-content-end">
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
          </div>
        </section>
        </>
    )
};

export default Header;