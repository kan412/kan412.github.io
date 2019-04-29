import NewsListModel from './model';
import NewsListView from "./view";

class NewsListController{
    constructor(){
        this.model = new NewsListModel();
        this.view = new NewsListView();
    }

    getNewsBySourceID(sourceId){
        return this.model.fetch(sourceId);
    }

    renderNews(data){
        this.view.render(data);
    }
}

export default NewsListController;