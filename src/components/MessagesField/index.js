import React, {useRef} from "react";
import './styles.css';
import Message from "./Messages";

export default function MessagesField({messages, isLoading}){
    return(<div className="messages-field">
            <ul>
                {messages.map(({id, name, text, created_at}) =>{
                    return  <Message key={id} name={name} text={text} date={new Date(created_at).toLocaleString()} />
                })}
            </ul>
            {isLoading && <div className="messages-field-loading">
                <h3>
                    Loading...
                </h3>
            </div>}
        </div>
    )
}