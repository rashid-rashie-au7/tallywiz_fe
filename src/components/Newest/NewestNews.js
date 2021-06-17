import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { getNews } from '../../API/API_Calls';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function NewestNews({ newestId }) {
    const [newest, setNewest] = useState({})

    useEffect(() => {
        getNews(newestId).then(data => data && data.url && setNewest(data))
    }, [])

    return (
        <>
            {newest && newest.url != null ? (
                <div className="news-wrapper">
                    <div className="news-title">
                        <Link to="/login"><FontAwesomeIcon className="title-icon" icon={faCaretUp} size="1.5x" /></Link>
                        <a href={newest.url}><span className="heading">{newest.title}</span><span className="text-muted">{`(${new URL(newest.url).hostname})`}</span></a>
                    </div>
                    <div className="news-details">
                        <span className="text-muted">{newest.score} points </span>
                        <span className="text-muted">by {newest.by} </span>
                        {new Date(newest.time * 1000).getHours() != 0 ? (<span className="text-muted">{(new Date(newest.time * 1000)).getHours()} hours ago </span>) : (<span className="text-muted">{(new Date(newest.time * 1000)).getMinutes()} mins ago </span>)}
                        | <span className="text-muted">hide </span>
                        | {!newest.kids ? (<span className="text-muted"> 0 comments </span>) : (<span className="text-muted"> {(newest.kids).length} comments </span>)}
                    </div>
                </div>
            ) : (<></>)}
        </>
    )
}

export default NewestNews
