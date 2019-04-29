import config from '../../config.json';
import ApiFetcherProxy from '../../shared/api-fetcher-proxy';

class NewsListModel{
    constructor(){
        this.proxy = new ApiFetcherProxy().load();
    }

    fetch(sourceId){
        const url = `${config["API_BASE"]}/articles?source=${sourceId}&apiKey=${config["API_KEY"]}`;
        return this.proxy.request(url, 'GET');
    }
}

export default NewsListModel;