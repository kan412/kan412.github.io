import NewsSources from "../components/news-sources/";
import NewsList from "../components/news-list/";

class App{
    initialize(){
        this.newsSources = new NewsSources(this.handleSourceChange);
        this.newsList = new NewsList();
        this.newsSourcesInit();
    }

    async newsSourcesInit(){
        await this.newsSources.getSources();
        this.newsSources.setDefaultSource();
    }

    handleSourceChange = ( sourceId ) => {
        this.newsList.getNewsBySourceID(sourceId);
    }

}

export default App;