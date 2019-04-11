import { generateNewsHTML } from './buildNews';
import {newsContainer} from '../variables';

export function renderAllNews( data ){
    let newsContent=`<h1 tabindex="0" class="app-main__news__title">${data.source}</h1>`;

    data.articles.map(news => { 
        newsContent += generateNewsHTML(news.author, news.title, news.description, news.urlToImage, news.url, news.publishedAt);
    });

    newsContainer.innerHTML = newsContent;
    newsContainer.classList = "app-main__news";
    newsContainer.focus();

}
