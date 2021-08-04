import React, {useRef} from "react";
import './styles.css';


export default function MessagesField({messages, isLoading}){

    const ulEl = useRef();
    // ulEl.current.

    {    console.log(ulEl.current?.scrollTop)}
    return(<div className="messages-field">
            <ul ref={ulEl} >

                {messages.map(({id, name, text}) =>{
                    return  <li key={id}>
                        <span>{name}</span>
                        <span>{text}</span>
                    </li>
                })}
            </ul>
            {isLoading && <div className="messages-field-loading">
                <h3>
                    Loading...
                </h3>
            </div>}
        </div>
    )
    // if(false){
    //     return (
    //          <div className="messages-field">
    //              <h3>
    //                  Loading...
    //              </h3>
    //          </div>)
    // }else {
    //
    // }
}