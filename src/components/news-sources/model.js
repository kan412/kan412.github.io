import NewsSourcesView from "./view";

class NewsSourcesModel{
    constructor(view){
        this.view = view;
    }

    setSources(sources){
        this.view.render(sources);
    }

}

export default NewsSourcesModel;