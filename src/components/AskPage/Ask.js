import React, {useEffect,useState} from 'react';
import { getNews } from '../../API/API_Calls';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Ask({askId}) {

    const [ask, setAsk] = useState({})

    useEffect(() => {
        getNews(askId).then(data => data  && setAsk(data));
        
    }, [])

    return (
        <>
            {ask  ? (
                <div className="news-wrapper">
                    <div className="news-title">
                        <Link to="/login"><FontAwesomeIcon className="title-icon" icon={faCaretUp} size="1.5x" /></Link>
                        <a href={ask.url}><span className="heading">{ask.title}</span></a>
                    </div>
                    <div className="news-details">
                        <span className="text-muted">{ask.score} points </span>
                        <span className="text-muted">by {ask.by} </span>
                        {new Date(ask.time * 1000).getHours() != 0 ? (<span className="text-muted">{(new Date(ask.time * 1000)).getHours()} hours ago </span>) : (<span className="text-muted">{(new Date(ask.time * 1000)).getMinutes()} mins ago </span>)}
                        | {!ask.kids ? (<span className="text-muted"> discuss </span>) : (<span className="text-muted"> {(ask.kids).length} comments </span>)}
                    </div>
                </div>
            ) : (<></>)}
        </>
    )
}

export default Ask
