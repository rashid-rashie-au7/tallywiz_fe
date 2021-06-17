import React,{useEffect,useState} from 'react';
import { getJobIds} from "../../API/API_Calls";
import Jobs from './Jobs';

function JobsPage() {

    const [jobID, setJobID] = useState([]);
    
    useEffect(() => {
        getJobIds().then(data => setJobID(data) );
    }, [])

    return (
        <div>
            {jobID.map(jobId=> <Jobs key={jobId} jobId={jobId} />)}       
        </div>
    )
}

export default JobsPage
