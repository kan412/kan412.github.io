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

        this.bindChangeEvent();
    }

    bindChangeEvent(){
        const selectElement = document.getElementById('channelFilter');
    
        selectElement.addEventListener('change', ({ target }) => {  
            if(target.tagName === 'SELECT'){
                import("./NewsComponent").then( async module => {

                    
                    const newsComponent = new module.default();

                    try{
                        const news = await newsComponent.fetch( config, target.value );
                        newsComponent.render(news);
                    }catch(error){
                        console.log(error);
                    }

                });
            }
        });
    }
}

export default NewsFeedComponent;




