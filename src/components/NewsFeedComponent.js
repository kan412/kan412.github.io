import config from "../config.json";
import SourcesComponent from './SourcesComponent';

class NewsFeedComponent{
    constructor(){
        this.initialize();
        this.bindChangeEvent();
    }
    
    async initialize(){
        const sourcesComponent = new SourcesComponent();
        try{
            const sources = await sourcesComponent.fetch( config["SOURCES_API"] );
            sourcesComponent.render(sources);
        }catch(error){
            console.log(error);
        }
    }

    bindChangeEvent(){
        const selectElement = document.getElementById('channelFilter');
    
        selectElement.addEventListener('change', ({ target }) => {  
            if(target.tagName === 'SELECT'){
                import("./NewsComponent").then( async module => {
                    const url = `${config["API_BASE"]}/articles?source=${target.value}&apiKey=${config["API_KEY"]}`;
                    const newsComponent = new module.default();
                    const news = await newsComponent.fetch( url );
                    newsComponent.render(news);
                });
            }
        });
    }
}

export default NewsFeedComponent;




