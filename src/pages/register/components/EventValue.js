import React from "react";


const EventValue = ({ available }) => {
    if (!available) return null;
  
    return (
      <p> Registered for roffle on 22nd on July, 2022. Awaiting result. </p>
    );
  };

export default EventValue;