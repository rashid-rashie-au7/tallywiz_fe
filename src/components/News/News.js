import React, { useEffect, useState } from 'react'
import { getNews } from '../../API/API_Calls';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import './News.css'
import { Link } from 'react-router-dom';

function News({ newsId }) {
    const [news, setNews] = useState({})

    useEffect(() => {
        getNews(newsId).then(data => data && data.url && setNews(data))
    }, [])

    return (
        <>
            {news && news.url != null ? (
                <div className="news-wrapper">
                    <div className="news-title">
                        <Link to="/login"><FontAwesomeIcon className="title-icon" icon={faCaretUp} size="1.5x" /></Link>
                        <a href={news.url}><span className="heading">{news.title}</span><span className="text-muted">{`(${new URL(news.url).hostname})`}</span></a>
                    </div>
                    <div className="news-details">
                        <span className="text-muted">{news.score} points </span>
                        <span className="text-muted">by {news.by} </span>
                        {new Date(news.time * 1000).getHours() != 0 ? (<span className="text-muted">{(new Date(news.time * 1000)).getHours()} hours ago </span>) : (<span className="text-muted">{(new Date(news.time * 1000)).getMinutes()} mins ago </span>)}
                        | <span className="text-muted">hide </span>
                        | {!news.kids ? (<span className="text-muted"> 0 comments </span>) : (<span className="text-muted"> {(news.kids).length} comments </span>)}
                    </div>
                </div>
            ) : (<></>)}
        </>
    )
}

export default News
