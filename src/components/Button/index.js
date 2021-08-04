import React from "react";
import './styles.css';

export default function Button({isVisible, onClickHandler, children}){
    return(
    <button className="buttons"
        style={isVisible ? {} :{"visibility" : "hidden"}}
        onClick={onClickHandler}>
        {children}
    </button>
    )

}

