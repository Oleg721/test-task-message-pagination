import React, {useRef} from "react";
import './styles.css';

export default function Message({name, text, date}) {
    return (
        <li className="message-li">
            <span>{name }<span>{date}</span></span>
            <span>{text}</span>
        </li>

    )
}