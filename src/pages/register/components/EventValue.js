import React, {useState} from "react";


const EventValue = () => {
    const [isPreview, setIsPreview] = useState(true);
    if (isPreview) {
        return (
          <div>
             <p> Registration closed. </p>
             
          </div>
        );
      } else {
        return (
          <div>
            <p> Registered for roffle on 22nd on July, 2022. Awaiting result. </p>
          </div>
        );
      }

  
  };

export default EventValue;
