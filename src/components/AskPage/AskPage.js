import React,{useEffect,useState} from 'react';
import { getAskIds} from "../../API/API_Calls";
import Ask from './Ask';

function AskPage() {

    const [askID, setAskID] = useState([]);
    
    useEffect(() => {
        getAskIds().then(data => setAskID(data) );
    }, [])

    return (
        <div>
            {askID.map(askId=> <Ask key={askId} askId={askId} />)}       
        </div>
    )
}

export default AskPage
