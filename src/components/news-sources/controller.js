import NewsSourcesModel from './model';
import NewsSourcesView from './view';
import { API_BASE, DEFAULT_SOURCE_NAME  } from '../../config.json';
import proxy from '../../shared/api-fetcher-proxy';


class NewsSourcesController{
    constructor(onSourceChangeCallBack){
        this.view = new NewsSourcesView(this);
        this.model = new NewsSourcesModel(this.view);
        this.onSourceChange = onSourceChangeCallBack;
    }


    async getSources(){
        const url = `${API_BASE}/sources`;
        const data = await proxy.request(url, 'GET');
        this.model.setSources(data.sources);
    }

    setDefaultSource = () =>{
        const {sources} = this.model;
        const defaultSource = sources.find(({ name }) =>   name === DEFAULT_SOURCE_NAME);
        const defaultSourceId =  defaultSource ? defaultSource.id : sources[0].id;
        this.model.setActiveSource(defaultSourceId);
    }

    changeSource(sourceId){
        this.onSourceChange(sourceId);
    }
   
}

export default NewsSourcesController;