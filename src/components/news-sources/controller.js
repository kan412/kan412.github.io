import NewsSourcesModel from './model';
import NewsSourcesView from './view';

class NewsSourcesController{
    constructor(){
        this.model = new NewsSourcesModel();
        this.view = new NewsSourcesView();
    }

    getSources(){
        return this.model.fetch();
    }

    renderSources(sources){
        this.view.render(sources);
    }

   
}

export default NewsSourcesController;