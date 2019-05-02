import NewsSources from "../components/news-sources/";
import NewsList from "../components/news-list/";

class App{
    constructor(){
        this.initialize();
    }

    initialize(){
        this.newsSources = new NewsSources(this);
        this.newsList = new NewsList();
        this.setDefaultSource();    
    }

    setDefaultSource = async() =>{
        const sources = await this.newsSources.getSources();
        const defaultSource = sources[0].id;
        this.onSourceChange(defaultSource);
    }

    onSourceChange = ( sourceId ) => {
        this.newsList.getNewsBySourceID(sourceId);
    }

}

export default App;