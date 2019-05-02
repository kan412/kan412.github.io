class NewsListModel{
    constructor(view){
        this.view = view;
        this.news = [];
    }

    setNews(data){
        this.news = data;
        this.notify(this.news);
    }

    notify(data){
        this.view.render(data);
    }
}

export default NewsListModel;