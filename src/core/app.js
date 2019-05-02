import NewsSourcesController from "../components/news-sources/";

class App{
    constructor(){
        const newsSourcesController = new NewsSourcesController();
        newsSourcesController.getSources();
    }
}

export default App;