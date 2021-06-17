import React ,{useEffect,useState} from 'react';
import { getNews } from '../../API/API_Calls';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Comment({commentId}) {

    const [comment, setComment] = useState({})

    useEffect(() => {
        getNews(commentId).then(data => data  && setComment(data));
        
    }, [])

    return (
        <div>
            <>
            {comment && comment.url != null  ? (
                <div className="news-wrapper">
                    <div className="news-details">
                        <span className="text-muted">by {comment.by} </span>
                        {new Date(comment.time * 1000).getHours() != 0 ? (<span className="text-muted">{(new Date(comment.time * 1000)).getHours()} hours ago </span>) : (<span className="text-muted">{(new Date(comment.time * 1000)).getMinutes()} mins ago </span>)}
                        <span className="text-muted">parent[-] </span>
                        {/* <span className="text-muted">on: {comment.parent} </span> */}
                    </div>
                    <div className="news-title">
                        <Link to="/submit"><FontAwesomeIcon className="title-icon" icon={faCaretUp} size="1.5x" /></Link>
                        <a href="/"><span className="heading">{comment.text}</span></a>
                    </div>
                    
                </div>
            ) : (<></>)}
        </>
        </div>
    )
}

export default Comment
