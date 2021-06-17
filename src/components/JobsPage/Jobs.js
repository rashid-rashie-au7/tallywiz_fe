import React,{useEffect,useState} from 'react'
import { getNews } from '../../API/API_Calls';

function Jobs({jobId}) {

    const [job, setJob] = useState({})

    useEffect(() => {
        getNews(jobId).then(data => data  && setJob(data) > console.log("data === ",data));
    }, [])

    return (
        <>
            {job && job.url != null  ? (
                <div className="news-wrapper">
                    <div className="news-title">
                        <a href={job.url}><span className="heading">{job.title}</span><span className="text-muted">{`(${new URL(job.url).hostname})`}</span></a>
                    </div>
                    <div className="news-details">
                        {new Date(job.time * 1000).getHours() != 0 ? (<span className="text-muted">{(new Date(job.time * 1000)).getHours()} hours ago </span>) : (<span className="text-muted">{(new Date(job.time * 1000)).getMinutes()} mins ago </span>)}
                    </div>
                </div>
            ) : (<></>)}
        </>
    )
}

export default Jobs
