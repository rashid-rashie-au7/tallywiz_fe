import axios from 'axios';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';

export const topNewsURL = `${baseURL}topstories.json`;

export const newestURL = `${baseURL}newstories.json`;

export const jobsURL = `${baseURL}jobstories.json`;

export const askURL = `${baseURL}askstories.json`;

export const showURL = `${baseURL}showstories.json`;

export const commentURL = `${baseURL}comments.json`;

export const newsURL = `${baseURL}item/`;


export const getTopNewsIds = async() => {
    const result = await axios.get(topNewsURL)
    .then(({data}) => data);
    return result;
}

export const getNewestIds = async() => {
    const result = await axios.get(newestURL)
    .then(({data}) => data);
    return result;
}

export const getJobIds = async() => {
    const result = await axios.get(jobsURL)
    .then(({data}) => data);
    return result;
}

export const getAskIds = async() => {
    const result = await axios.get(askURL)
    .then(({data}) => data);
    console.log(result)
    return result;
}

export const getShowIds = async() => {
    const result = await axios.get(showURL)
    .then(({data}) => data);
    return result;
}
export const getCommentIds = async() => {
    const result = await axios.get(commentURL)
    .then(({data}) => data)
    .catch(error => {
         console.error('There was an error!', error);
     });
    return result;
}

export const getNews = async(newsID) => {
    const result = await axios.get(`${newsURL+newsID}.json`)
    .then(({data}) => data);
    return result;
}

