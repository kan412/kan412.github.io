
class NewsListModel{
    constructor(view){
        this.view = view;
    }

    getNews(data){
        this.view.render(data);
    }
}

export default NewsListModel;