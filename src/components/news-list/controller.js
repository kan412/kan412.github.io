import NewsListModel from './model';
import NewsListView from "./view";
import config from '../../config.json';
import ApiFetcherProxy from '../../shared/api-fetcher-proxy';

class NewsListController{
    constructor(){
        this.view = new NewsListView(this);
        this.model = new NewsListModel(this.view);
        this.proxy = new ApiFetcherProxy().load();
    }
 
    async loadNews(sourceId){
        const news = await newsListController.getNewsBySourceID(sourceId);
        newsListController.renderNews(news);
    }

    async getNewsBySourceID(sourceId){
        const url = `${config["API_BASE"]}/articles?source=${sourceId}&apiKey=${config["API_KEY"]}`;
        const data = await this.proxy.request(url, 'GET');
        this.model.getNews(data);
    }
}

export default NewsListController;