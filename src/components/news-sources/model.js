class NewsSourcesModel{
    constructor(view){
        this.view = view;
        this.sources = [];
    }

    setSources(sources){
        this.sources = sources;
        this.notify(this.sources);
    }

    notify(sources){
        this.view.render(sources);
    }

}

export default NewsSourcesModel;