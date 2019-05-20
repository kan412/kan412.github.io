import NewsListModel from './model';
import NewsListView from "./view";
import { API_BASE, API_KEY } from '../../config.json';
import proxy from '../../shared/api-fetcher-proxy';

class NewsListController{
    constructor(){
        this.view = new NewsListView(this);
        this.model = new NewsListModel(this.view);
    }

    getNewsBySourceID = async (sourceId) => {
        const url = `${API_BASE}/articles?source=${sourceId}&apiKey=${API_KEY}`;
        const data = await proxy.request(url, 'GET');
        this.model.setNews(data);
    }
}

export default NewsListController;