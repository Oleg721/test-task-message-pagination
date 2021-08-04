import './style.css';
import React, {useEffect, useState} from "react";
import { useHistory, useLocation } from "react-router-dom";
import MessagesField from "../components/MessagesField";
import Pagination from "../components/Pagination";

const serverAPI_URL = "https://jordan.ashton.fashion/api/goods/30/comments"

function Comments() {
    const [messages, setMessages] = useState([]);
    const [links, setLinks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isClearMessage, setIsClearMessages] = useState(true);
    const history = useHistory();
    const location = useLocation();

    function getPageData(url){
        if(url){
            history.push(url.match(/\?page=.+$/)[0]);
        }
    }

    function showMoreHandler(){
        setIsClearMessages(false);
        links.forEach(({active}, index) => {
            if(active){
                getPageData(links[++index].url)
            }
        } )
    }

    useEffect(async () => {
        setIsLoading(true);
        const response = await fetch(serverAPI_URL + location.search);
        const {data, links} = await response.json()
        if(isClearMessage){
            setMessages(data);
        }else {
            setMessages([...messages, ...data]);
            setIsClearMessages(true);
        }
        setLinks(links);
        setIsLoading(false);
    }, [location.search])

    return (
            <div className="App">
                <MessagesField messages={messages} isLoading={isLoading}/>
                <button
                    style={!!links[links.length-1]?.url ? {} :{"visibility" : "hidden"}}
                    onClick={showMoreHandler}>
                    Показать еще
                </button>
                <Pagination links={links} onClickEvent={getPageData}/>
            </div>
    );
}

export default Comments;
