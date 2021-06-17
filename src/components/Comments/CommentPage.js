import React,{useState,useEffect} from 'react';
import { getCommentIds} from "../../API/API_Calls";
import Comment from './Comment';

function CommentPage() {

    const [commentID, setCommentID] = useState([]);

    useEffect(() => {
        getCommentIds().then(data => setCommentID(data) )
    }, []);

    return (
        <div>
            Permission denied 
            {/* {commentID.map(commentId=> <Comment key={commentId} commentId={commentId} />)} */}
        </div>
    )
}

export default CommentPage
