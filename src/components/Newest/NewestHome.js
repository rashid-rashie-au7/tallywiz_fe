import React ,{useEffect, useState} from 'react';
import {getNewestIds} from "../../API/API_Calls";
import NewestNews from './NewestNews';

function NewestHome() {

    const [newestID, setNewestID] = useState([]);

    useEffect(() => {
        getNewestIds().then(dataNews => setNewestID(dataNews));
    }, []);

    return (
        <div>
            {newestID.map(newestId => <NewestNews key={newestId} newestId={newestId} />)}
        </div>
    )
}

export default NewestHome
