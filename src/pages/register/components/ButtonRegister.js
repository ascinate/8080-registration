import React, {useState} from "react";
import { BsArrowRight } from "react-icons/bs";


function ButtonRegister(){
    const [disabled, setDisabled] = useState("false");
    return(
        <>
          <button type="button" className="btn comon-btn-ree register-btn2"  disabled={disabled}> Register <BsArrowRight/> </button>
        </>
    );
}
export default ButtonRegister;