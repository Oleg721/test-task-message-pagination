import React from "react";
import './styles.css';
import PaginationItem from "./PaginationItem";


export default function Pagination({links, onClickEvent}){
    return(
<nav className="pagination">
    <ul >
        {links.map(({url, label, active}, index)=>{
            return <PaginationItem
                url={url}
                label={label}
                isCurrent={active}
                onClick={onClickEvent}
                key={index}/>
        })}
    </ul>
</nav>
    )

}