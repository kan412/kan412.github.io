import {channelFilter} from './modules/variables';
import {renderNewsChannels} from './modules/source/getSources';

class Newsfeed{
    constructor(key){
        this.key = key;
    }
    
    load(){
        renderNewsChannels();
        this.handleEvents();
    }

    handleEvents(){
        channelFilter.addEventListener('change', ({ target }) => {
            import(/* webpackChunkName: "getNews" */"./modules/news/getNews").then( module => {
                if( target.tagName === 'SELECT'){

                    //console.log(module.getNewsByChannel);

                    module.getNewsByChannel(target.value, this.key);
                }
            });
        });
    }
}

export default Newsfeed;




