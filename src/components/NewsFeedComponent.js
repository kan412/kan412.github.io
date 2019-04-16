import config from "../config.json";
import SourcesComponent from './SourcesComponent';

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
            console.log(error);
        }

        const selectElement = document.getElementById('channelFilter');
        selectElement.addEventListener('change', ({ target }) => this.loadNews(target.value) );
    }

    async loadNews(sourceId){
        try{
            const module = await import("./NewsComponent");
            const newsComponent = new module.default();
            const news = await newsComponent.fetch( config, sourceId );
            newsComponent.render(news);
        }catch(error){
            console.log(error);
        }
    }
}

export default NewsFeedComponent;




