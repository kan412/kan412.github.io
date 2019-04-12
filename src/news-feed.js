import {API_BASE,API_KEY, SOURCES_API} from './modules/variables';
import SourcesComponent from './SourcesComponent';

class Newsfeed{
    constructor(key){
        this.key = key;
        this.handleEvents();
    }
    
    async load(){
        const sourcesComponent = new SourcesComponent();
        const sources = await sourcesComponent.fetch(SOURCES_API);
        sourcesComponent.render(sources);
        
    }

    handleEvents(){
        const channelFilter = document.getElementById('channelFilter');

        channelFilter.addEventListener('change', ({ target }) => {  

                 import("./NewsComponent").then( async module => {
                    const channelID = target.value;
                    const newsComponent = new module.default();
                    let news = await newsComponent.fetch(API_BASE, API_KEY, channelID);
                    newsComponent.render(news);
                });
            
        });
    }
}

export default Newsfeed;




