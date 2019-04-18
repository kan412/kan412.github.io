import config from "../config.json";
import SourcesComponent from './SourcesComponent';
import ErrorHandlerComponent from './ErrorHandlerComponent';

class NewsFeedComponent{
    constructor(){
        this.initialize();
    }
    
    async initialize(){
        const sourcesComponent = new SourcesComponent();
        const sources = await sourcesComponent.fetch();
        sourcesComponent.render(sources);
       
        const selectElement = document.getElementById('channelFilter');
        selectElement.addEventListener('change', ({ target }) => this.loadNews(target.value) );
    }

    async loadNews(sourceId){
        const module = await import(/* webpackChunkName: "getNews" */ "./NewsComponent");
        const newsComponent = new module.default();
        const news = await newsComponent.fetch(sourceId );
        newsComponent.render(news);
    }
}

export default NewsFeedComponent;




