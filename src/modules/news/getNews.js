import {renderAllNews} from './renderNews';

export async function getNewsByChannel( channelID ,key ){
    const channelAPI = `https://newsapi.org/v1/articles?source=${channelID}&apiKey=${key}`;
    try {
        const response = await fetch(channelAPI);
        const data = await response.json();
        return renderAllNews(data);
    }
    catch (error) {
        return console.log(error);
    }
}
