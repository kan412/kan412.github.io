class Newsfeed{
    constructor(key){
        this.key = key;
        this.sourcesAPI= 'https://newsapi.org/v1/sources';
    }
    
    load(){
        this.renderNewsChannels();
        this.handleEvents();
    }

    renderNewsChannels(){
        return fetch(this.sourcesAPI).
                then( response => response.json()).
                then( data => this.generateNewsChannelSelectElement(data)).
                catch( error => console.log(error));
    }

    generateNewsChannelSelectElement( data ){
        const selectElement = document.getElementById('channelFilter');
        let selectElementOptions='<option value="select-channel">Select Channel</option>';
        data.sources.map(({ id, name }) => {
            selectElementOptions += `<option value='${id}'>${name}</option>`;
        });
        selectElement.innerHTML = selectElementOptions;
    }


    // To Handle 'change' event
    handleEvents(){
        const channelFilter = document.getElementById('channelFilter');
        channelFilter.addEventListener('change', ({ target }) => {
             if( target.tagName === 'SELECT'){
                 this.getNewsByChannel(target.value);
             }
        });
    }
    
    getNewsByChannel( channelID ){
        const channelAPI = `https://newsapi.org/v1/articles?source=${channelID}&apiKey=${this.key}`;
        return fetch(channelAPI).
                then(response => response.json()).
                then(data => this.renderNews(data)).
                catch( error => console.log(error));
    }

    renderNews( data ){
        const newsContainer = document.getElementById('app-main__news');
        let newsContent=`<h1 tabindex="0" class="app-main__news__title">${data.source}</h1>`;

        data.articles.map(news => { 
            newsContent += this.generateNewsHTML(news.author, news.title, news.description, news.urlToImage, news.url, news.publishedAt);
        });

        newsContainer.innerHTML = newsContent;
        newsContainer.classList = "app-main__news";
        newsContainer.focus();

    }

    generateNewsHTML( author, title, content, image, url, publishedOn){
        return `<article class="news">
                    <div class="news__image">
                        <img src="${image}" alt="${title}" />
                    </div>
                    <div class="news__body">
                        <h3 class="news__title"><a href="${url}" target="_blank">${title}</a></h3>
                        
                        <div class="news__meta">
                            <p>Author: <b><em class="news__meta__author">${author}</em></b> // Published on <b>${ this.formateDate(publishedOn) }</b></p>
                        </div>
                        
                        <div class="news__content">
                            <p>${content}</p>
                        </div>

                        <a class="news__readmore" target="_blank" href="${url}">Continue Reading</a>
                    </div>
                </article>`;
    }



    // helper 
    formateDate(dateString){
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const modifiedDate = `${day}/${month}/${year}`;

        return modifiedDate;
    }

}



