import React, {useEffect, useState} from "react";
import './styles.css';

export default function SendForm({url, method, onSubmitHandler, isSuccessSend}){
    const [name, setName] = useState(``);
    const [text, setText] = useState(``);

    return(
        <form
            className="form"
            onSubmit={(event)=>{
                event.preventDefault();
                onSubmitHandler({name: name, text: text});
                setText(``);
            }}>
<div>
    <label>Name:</label>
    <input type="text" name="name" required={true} value={name} onChange={event => setName(event.target.value)}/>
    <label>Text:</label>
    <input  type="text" name="text" required={true} value={text} onChange={event => setText(event.target.value)}/>
</div>
            <input className="buttons" type="submit" value="Send"/>
        </form >
    )

}

