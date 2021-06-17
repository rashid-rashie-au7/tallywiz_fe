import React, {useEffect ,useState} from 'react'
import { getTopNewsIds} from "../../API/API_Calls";
import News from './News';

function HomePage() {
    const [newsID, setNewsID] = useState([]);
    
    useEffect(() => {
        getTopNewsIds().then(data => setNewsID(data));
    }, [])

    return (
        <div>
            {newsID.map(newsId=> <News key={newsId} newsId={newsId} />)}   
        </div>
    )
}

export default HomePage
