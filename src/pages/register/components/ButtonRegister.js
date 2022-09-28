import React, {useState} from "react";
import { BsArrowRight } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ButtonRegister(){
    const notify = () => toast("Wow so easy!");

    const [disabled, setDisabled] = useState("false");
    
    const [isActivediv, setActiveDiv] = useState("false");

    return(
        <>
        <ToastContainer />
         
        </>
    );
}
export default ButtonRegister;