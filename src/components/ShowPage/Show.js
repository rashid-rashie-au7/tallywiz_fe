import React, {useEffect,useState} from 'react'
import { getNews } from '../../API/API_Calls';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Show({showId}) {

    const [show, setShow] = useState({})

    useEffect(() => {
        getNews(showId).then(data => data  && setShow(data));
        
    }, [])

    return (
        <>
            {show && show.url != null  ? (
                <div className="news-wrapper">
                    <div className="news-title">
                        <Link to="/login"><FontAwesomeIcon className="title-icon" icon={faCaretUp} size="1.5x" /></Link>
                        <a href={show.url}><span className="heading">{show.title}</span><span className="text-muted">{`(${new URL(show.url).hostname})`}</span></a>
                    </div>
                    <div className="news-details">
                        <span className="text-muted">{show.score} points </span>
                        <span className="text-muted">by {show.by} </span>
                        {new Date(show.time * 1000).getHours() != 0 ? (<span className="text-muted">{(new Date(show.time * 1000)).getHours()} hours ago </span>) : (<span className="text-muted">{(new Date(show.time * 1000)).getMinutes()} mins ago </span>)}
                        | {!show.kids ? (<span className="text-muted"> discuss </span>) : (<span className="text-muted"> {(show.kids).length} comments </span>)}
                    </div>
                </div>
            ) : (<></>)}
        </>
    )
}

export default Show
