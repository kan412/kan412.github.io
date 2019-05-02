import NewsSourcesModel from './model';
import NewsSourcesView from './view';
import config from '../../config.json';
import ApiFetcherProxy from '../../shared/api-fetcher-proxy';


class NewsSourcesController{
    constructor(){
        this.view = new NewsSourcesView(this);
        this.model = new NewsSourcesModel(this.view);
        this.proxy = new ApiFetcherProxy().load();
    }

    async getSources(){
        const url = `${config["API_BASE"]}/sources`;
        const data = await this.proxy.request(url, 'GET');
        this.model.setSources(data.sources);
    }

    async changeSource(sourceId){
        const module = await import(/* webpackChunkName: "getNews" */ "../news-list/");
        const newsListController = new module.default();
        newsListController.getNewsBySourceID(sourceId);
    }
   
}

export default NewsSourcesController;