class Newsfeed{
    constructor(){
        this.key = '6df77133a743489a965dd29e31343e75';
        this.sourcesAPI= 'https://newsapi.org/v1/sources';
        //this.channelApi = `https://newsapi.org/v1/articles?source=${this.channelID}&apiKey=${this.key}`;
    }

    load(){
        this.sources;
        this.evenHandler();
    }

    evenHandler(){
        const channelFilter = document.getElementById('channelFilter');

        channelFilter.addEventListener('change', (e) => {
             if( e.target.tagName === 'SELECT'){
                 this.articlesByChannel(e.target.value);
             }
        });
    }

    
    articlesByChannel( channelID ){
        const channelApi = `https://newsapi.org/v1/articles?source=${channelID}&apiKey=${this.key}`;

        return fetch(channelApi).
                then(response => response.json()).
                then(data => this.renderArticles(data)).
                catch(function(e){
                    console.log(e);
                });
    }

    renderArticles( data ){
        let mainContainer = document.getElementsByClassName('app-main__news')[0];
        let articles=`<h1 class="app-main__news__title">${data.source}</h1>`;
        data.articles.map(article => { 
            let authorName = article.author;
            let title = article.title;
            let content = article.description;
            let imageURL = article.urlToImage;
            let url = article.url;
            articles += `<article class="news">
                            <div class="news__image">
                                <img src="${imageURL}" alt="${title}" />
                            </div>
                            <div class="news__body">
                                <h3 class="news__title">${title}</h3>
                               
                                <div class="news__meta">
                                    <p>Author: <b class="news__meta__channelname">${authorName}</b></p>
                                </div>
                                
                                <div class="news__content">
                                    <p>${content}
                                </div>

                                <a class="news__readmore" target="_blank" href="${url}">Continue Reading</a>
                            </div>
                        </article>`;
        });

    mainContainer.innerHTML = articles;
    mainContainer.classList = "app-main__news";
    mainContainer.focus();

    }

    get sources(){
        return fetch(this.sourcesAPI).
                then( response => response.json()).
                then( data => this.renderSources(data)).
                catch(function(e){
                    console.log(e);
            });
    }

    renderSources( data ){
        let channelContainer = document.getElementById('channelFilter');
        let sourcesHTML='<option value="select-channel">Select Channel</option>';
        data.sources.map( source => {
            sourcesHTML += `<option value='${source.id}'>${source.name}</option>`;
        });
        channelContainer.innerHTML = sourcesHTML;
    }
}



