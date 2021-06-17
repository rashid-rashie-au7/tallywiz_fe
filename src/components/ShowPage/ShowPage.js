import React,{useEffect,useState} from 'react';
import { getShowIds} from "../../API/API_Calls";
import Show from './Show';

function ShowPage() {

    const [showID, setShowID] = useState([]);
    
    useEffect(() => {
        getShowIds().then(data => setShowID(data) );
    }, [])

    return (
        <div>
            {showID.map(showId=> <Show key={showId} showId={showId} />)}
        </div>
    )
}

export default ShowPage
