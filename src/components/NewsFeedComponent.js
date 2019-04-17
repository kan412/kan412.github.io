import config from "../config.json";
import SourcesComponent from './SourcesComponent';
import ErrorHandlerComponent from './ErrorHandlerComponent';

class NewsFeedComponent{
    constructor(){
        this.initialize();
    }
    
    async initialize(){
        const sourcesComponent = new SourcesComponent();
        try{
            const sources = await sourcesComponent.fetch(config);
            sourcesComponent.render(sources);
        }catch(error){
            ErrorHandlerComponent.getInstance(error);
        }

        const selectElement = document.getElementById('channelFilter');
        selectElement.addEventListener('change', ({ target }) => this.loadNews(target.value) );
    }

    async loadNews(sourceId){
        try{
            const module = await import(/* webpackChunkName: "getNews" */ "./NewsComponent");
            const newsComponent = new module.default();
            const news = await newsComponent.fetch( config, sourceId );
            newsComponent.render(news);
        }catch(error){
            ErrorHandlerComponent.getInstance(error);
        }
    }
}

export default NewsFeedComponent;




