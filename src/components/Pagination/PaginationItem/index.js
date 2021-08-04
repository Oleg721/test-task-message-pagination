import React from "react";
import './styles.css';

export default function PaginationItem({url, label, isCurrent, onClick}){
    return(
        <li className='pagination-item' key={label} iscurrent={isCurrent.toString()}>
            <a href={url }
               dangerouslySetInnerHTML={{"__html": label.toString()}}
               onClick={event => {
                   event.preventDefault();
                   onClick(url);
                }}/>
        </li>
    )

}

