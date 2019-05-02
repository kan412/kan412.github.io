import NewsSourcesModel from './model';
import NewsSourcesView from './view';
import config from '../../config.json';
import proxy from '../../shared/api-fetcher-proxy';


class NewsSourcesController{
    constructor(onSourceChangeCallBack){
        this.view = new NewsSourcesView(this);
        this.model = new NewsSourcesModel(this.view);
        this.onSourceChange = onSourceChangeCallBack;
    }

    async getSources(){
        const url = `${config["API_BASE"]}/sources`;
        console.log(proxy);
        const data = await proxy.request(url, 'GET');
        this.model.setSources(data.sources);
        return data.sources;
    }

    changeSource(sourceId){
        this.onSourceChange(sourceId);
    }
   
}

export default NewsSourcesController;