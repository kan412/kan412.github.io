
import {formateDate} from '../helper';

export function generateNewsHTML( author, title, content, image, url, publishedOn){
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