class NewsListModel{
    constructor(view){
        this.view = view;
        this.news = [];
    }

    setNews(data){
        this.news = data;
        this.notify();
    }

    notify(){
        this.view.render(this.news);
    }
}

export default NewsListModel;