import NewsSourcesController from "../components/news-sources/";

class App{
    constructor(){
        this.initialize();
    }
    
    async initialize(){
        const newsSourcesController = new NewsSourcesController();
        const sources = await newsSourcesController.getSources();
        newsSourcesController.renderSources(sources);
       
        const selectElement = document.getElementById('channelFilter');
        selectElement.addEventListener('change', ({ target }) => this.loadNews(target.value) );
    }

    async loadNews(sourceId){
        const module = await import(/* webpackChunkName: "getNews" */ "../components/news-list/");
        const newsListController = new module.default();
        const news = await newsListController.getNewsBySourceID(sourceId);
        newsListController.renderNews(news);
    }
}

export default App;