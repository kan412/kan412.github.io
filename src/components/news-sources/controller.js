import NewsSourcesModel from './model';
import NewsSourcesView from './view';
import config from '../../config.json';
import ApiFetcherProxy from '../../shared/api-fetcher-proxy';


class NewsSourcesController{
    constructor(newsSourceChange){
        this.view = new NewsSourcesView(this);
        this.model = new NewsSourcesModel(this.view);
        this.proxy = new ApiFetcherProxy().load();
        this.newsSourceChange = newsSourceChange;
    }

    async getSources(){
        const url = `${config["API_BASE"]}/sources`;
        const data = await this.proxy.request(url, 'GET');
        this.model.setSources(data.sources);
        return data.sources;
    }

    changeSource(sourceId){
        this.newsSourceChange.onSourceChange(sourceId);
    }
   
}

export default NewsSourcesController;