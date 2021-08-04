import './style.css';
import React, {useEffect, useState} from "react";
import { useHistory, useLocation } from "react-router-dom";
import MessagesField from "../components/MessagesField";
import Pagination from "../components/Pagination";
import Button from "../components/Button";
import SendForm from "../components/SendForm";
import fetchAPI from "../utility/fetchAPI";

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

    async function sendMessage(data) {
        try{
            const result = await fetchAPI(serverAPI_URL)(data)
            if(result >= 1){
                const link = links[links.length - 2]
                getPageData(link.url)
            }
        }catch (e) {
            console.log(e)
            // throw new Error(e)
        }
    }

    function showMoreMessagesHandler(){
        setIsClearMessages(false);
        links.forEach(({active}, index) => {
            if(active){
                getPageData(links[++index].url)
            }
        } )
    }

    useEffect(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(serverAPI_URL + location.search);
            const {data, links} = await response.json()
            if(isClearMessage){
                setMessages(data);
            }else {
                setMessages([...messages, ...data]);
                setIsClearMessages(true);
            }
            setLinks(links);
        } catch (e) {
            console.log(e)
            // throw new Error(e)
        }
        setIsLoading(false);
    }, [location])

    return (
            <>
                <MessagesField messages={messages} isLoading={isLoading}/>
                <div className="wrapper">
                    <Button isVisible={!!links[links.length-1]?.url} onClickHandler={showMoreMessagesHandler}>Показать еще</Button>
                </div>
                <Pagination links={links} onClickEvent={getPageData}/>
                <SendForm onSubmitHandler={sendMessage}/>
            </>
    );
}

export default Comments;
