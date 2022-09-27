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

    return(
        <>
        <div id="main-total" className={isActive ? "show-main-up-allowlist" : null}>
            <Header/>
            <section className="home-page comon-page float-start w-100 mt-4">
                  <div className="container">
                      
                      <div className="top-sec-div-one">
                         <div className="row">
                            <div className="col-lg-4">
                               <figure className="mb-0">
                                  <img src="images/pg.jpg" alt="leftpic"/>
                               </figure>
                            </div>
                            <div className="col-lg-8">
                               <h2 className="mt-0"> Project Godjira </h2>
                               <p className="mb-5 col-lg-9"> A collection of 333 unique genesis Godjiras and 
                               3333 gen2 Godjiras on the Ethereum blockchain 
                               living as NFTs. </p>
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
                      


                      {
                        prelogData.map((curElem) =>{
                            const { id, titel, register, allowed, winners,  } = curElem;
                            return(
                                <>
                               
                                <div className="comon-ge1-div">
                                     <h2 className="mt-0"> {titel} </h2>
                                        <div className="col-lg-10 mx-auto mb-5">
                                            <div className="row row-cols-1 row-cols-lg-3">
                                                <div className="col text-center">
                                                    <h1> {register} </h1>
                                                    <h5> Registrations</h5>
                                                </div>
                                                <div className="col text-center">
                                                    <h1> {allowed} </h1>
                                                    <h5> Max Allowed Registrations </h5>
                                                </div>
                                                <div className="col text-center">
                                                    <h1> RAFFLE </h1>
                                                    <h5 > {winners} winners to be picked. 
                                                    </h5>
                                                </div>
                                            </div>

                                            <div className="cty-div mt-4">
                                                    <div className="crytaria-div">
                                                        <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                                                            <div className="col">
                                                                <h2 className="m-0 text-white">Qualification <br/> 
                                                                Criteria </h2> 
                                                            </div>
                                                            <div className="col">
                                                                <ul className="list-unstyled m-0">
                                                                <li> Must follow @account on twitter </li>
                                                                <li> Must have 0.5 ETH in wallet </li>
                                                                <li> Must have @everyone role in discord </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-lg-end align-items-center">
                                                <button type="button" className="btn comon-btn-ree funt-btn"  onClick={onCkickHandel}>
                                                    Connect Wallet <BsArrowRight/>
                                                </button>
                                        </div>
                                </div>
                                </>
                            );
                        })
                    }
                      
                

                  </div>
            </section>
         </div>

        
        </>
    );
}
export default PreLogin;