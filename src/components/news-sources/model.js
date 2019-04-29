import config from '../../config.json';
import ApiFetcherProxy from '../../shared/api-fetcher-proxy';

class NewsSourcesModel{
    constructor(){
        this.proxy = new ApiFetcherProxy().load();
    }

    async fetch(){
        const url = `${config["API_BASE"]}/sources`;
        const data = await this.proxy.request(url, 'GET');
        return data.sources;
    }
}

export default NewsSourcesModel;