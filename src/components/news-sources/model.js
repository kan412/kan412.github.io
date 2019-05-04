class NewsSourcesModel{
    constructor(view){
        this.view = view;
        this.sources = [];
    }

    setSources(sources){
        this.sources = sources;
        this.notify();
    }

    setActiveSource = (sourceId) => {
        this.view.setActiveSource(sourceId);
    }

    notify(){
        this.view.render(this.sources);
    }

}

export default NewsSourcesModel;