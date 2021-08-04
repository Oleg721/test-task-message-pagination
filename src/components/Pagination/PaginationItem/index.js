import React from "react";
import './styles.css';

export default function PaginationItem({url, label, isCurrent, onClick}){
    return(
        <li className='pagination-item' key={label}>
            <a href={url }
               iscurrent={isCurrent.toString()}
               dangerouslySetInnerHTML={{"__html": label.toString()}}
               onClick={event => {
                   event.preventDefault();
                   onClick(url);
                }}/>
        </li>
    )

}

