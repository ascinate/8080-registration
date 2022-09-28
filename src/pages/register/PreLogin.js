import React, {useState} from "react";
import { BsArrowRight, BsXLg ,BsX } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaGlobe } from "react-icons/fa";
import Alldatapre from "./components/PreLoginApi";
import ComonSocaial from "./components/ComonSocaial";
import Header from "../../Header";



function PreLogin(){
    document.title ="8080 Godjira - Pre Login"
    const [show, toggleShow] = useState(false);
    const [isActive, setActive] = useState("false");

    const [ prelogData , setPreLogData] =useState(Alldatapre);
    console.log(prelogData);

    const handleToggle = () => {
        setActive(!isActive);
      };


    const onCkickHandel=()=>{
        document.querySelector("#main-total").classList.add('new-show-socal-div');
    }

   
    const onCkickHandelNew=(event)=> {
        event.target.classList.toggleShow('show-event');
    }

    

    return(
        <>
        <div id="main-total" className={isActive ? "show-main-up-allowlist" : null}>
            <Header/>
            <section className="home-page comon-page float-start w-100 sp-margin">
                  <div className="container">
                      
                      <div className="top-sec-div-one">
                         <div className="row align-items-center">
                            <div className="col-lg-4">
                               <figure className="mb-0">
                                  <img src="images/pg.jpg" alt="leftpic"/>
                               </figure>
                            </div>
                            <div className="col-lg-8 ps-lg-0">
                               <h2 className="mt-0"> Project Godjira </h2>
                               <p className="mb-5 col-lg-11"> A collection of 333 unique genesis Godjiras
                                and <span className="d-block">
                               3333 gen2 Godjiras on the Ethereum blockchain 
                               living as NFTs. </span> </p>
                               <NavLink to="/" className="btn comon-btn-socal">
                                   <FaTwitter/> @PGodjira
                               </NavLink>
                               <NavLink to="/" className="btn comon-btn-socal ms-3">
                                   <FaGlobe/> projectgodjira.io
                               </NavLink>
                            </div>
                         </div>
                      </div>


                      <div className="socal-contect-div ">
                          <ComonSocaial/>
                      </div>
                      

                    <div id="gen-div" className="gen-list-div" >
                      {
                        prelogData.map((curElem) =>{
                            const { id, titel, register, colsetext,   registerbtn, nouncheck, tagevent, notvaricheck, allowed, winners, firstpara, fist1, last1  } = curElem;
                            return(
                                <>
                               
                                <a className="comon-ge1-div" onClick={onCkickHandelNew}>
                                     <h2 className="mt-0"> {titel} </h2>
                                        <div className="col-lg-11 mx-auto mb-5">
                                            <div className="row main-row row-cols-1 row-cols-lg-3 g-lg-4 align-items-end">
                                                <div className="col text-center">
                                                    <h1> {register} </h1>
                                                    <h5> Registrations</h5>
                                                </div>
                                                <div className="col text-center">
                                                    <h1> {allowed} </h1>
                                                    <h5> Max Allowed Registrations </h5>
                                                </div>
                                                <div className="col text-center">
                                                   <div className="rafel-text">
                                                        <h1> RAFFLE </h1>
                                                        <h5 > {winners} winners to be picked. 
                                                        </h5>
                                                   </div>

                                                   <div className="first-cum-st1">
                                                        <h1> {fist1}<br/>
                                                        {last1} </h1>
                                                        <p> {firstpara} </p> 
                                                   </div>
                                                    
                                                </div>
                                            </div>

                                            <div className="cty-div col-lg-11 mx-auto mt-5">
                                                    <div className="crytaria-div">
                                                        <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                                                            <div className="col">
                                                                <h2 className="m-0 text-white ms-lg-5">Qualification <br/> 
                                                                Criteria </h2> 
                                                            </div>
                                                            <div className="col">
                                                                <ul className="list-unstyled m-0">
                                                                <li> 
                                                                    <span className="check-or-uncheck">
                                                                    <img src={nouncheck} alt="nont"/>
                                                                    </span> 
                                                                 <span> 
                                                                    Must follow <b> @account </b> on twitter 
                                                                 </span>
                                                                 </li>
                                                                <li> 
                                                                  <span className="check-or-uncheck">
                                                                     <img src={nouncheck} alt="nont"/>
                                                                  </span> 
                                                                  <span> 
                                                                    Must have <b> 0.5 ETH </b> in wallet 
                                                                   </span> 
                                                                </li>
                                                                <li> 
                                                                 <span className="check-or-uncheck">
                                                                    <img src={nouncheck} alt="nont" className="vari"/>
                                                                    <img src="images/path-cls.png" alt="nont" className="close1"/>
                                                                    
                                                                  </span>
                                                                  <span> 
                                                                  Must have <b> @everyone </b> role in discord
                                                                  </span> 
                                                                  </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div id="close" className="text-center close-text">
                                           <p> {colsetext} </p>
                                           <p> {tagevent} </p>
                                          
                                        </div>
                                        
                                        <div className="d-flex justify-content-lg-end align-items-center">
                                                <button type="button" className="btn comon-btn-ree funt-btn"  onClick={onCkickHandel}>
                                                    Connect Wallet <BsArrowRight/>
                                                </button>

                                               <div className="registe-btn-div">
                                                {registerbtn}
                                               </div>
                                        </div>
                                </a>
                                </>
                            );
                        })
                    }
                      
                    </div>

                  </div>
            </section>
         </div>

        
        </>
    );
}
export default PreLogin;