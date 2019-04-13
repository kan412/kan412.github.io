import {formateDate} from '../modules/helper';
import ApiFetcher from './ApiFetcher';

class NewsComponent extends ApiFetcher{
    constructor(){
        super();
    }

    async fetch( url ){
        return await super.fetch(url);
    }

    render(data){
        const newsContainer =  document.getElementById("app-main__news");
        let newsContent=`<h1 tabindex="0" class="app-main__news__title">${data.source}</h1>`;

        data.articles.map(article => { 
            newsContent += this.generateArticleHTML(article.author, article.title, article.description, article.urlToImage, article.url, article.publishedAt);
        });
    
        newsContainer.innerHTML = newsContent;
        newsContainer.classList = "app-main__news";
        newsContainer.focus();
    
    }

    generateArticleHTML(author, title, content, image, url, publishedOn){
        return `<article class="news">
                    <div class="news__image">
                        <img src="${image}" alt="${title}" />
                    </div>
                    <div class="news__body">
                        <h3 class="news__title"><a href="${url}" target="_blank">${title}</a></h3>
                        
                        <div class="news__meta">
                            <p>Author: <b><em class="news__meta__author">${author}</em></b> // Published on <b>${ formateDate(publishedOn) }</b></p>
                        </div>
                        
                        <div class="news__content">
                            <p>${content}</p>
                        </div>

                        <a class="news__readmore" target="_blank" href="${url}">Continue Reading</a>
                    </div>
                </article>`;
    }
}

export default NewsComponent;