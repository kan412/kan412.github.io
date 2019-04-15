import ApiFetcher from './ApiFetcher';

class SourcesComponent extends ApiFetcher{
    constructor(){
        super();
    }

    async fetch(config){
        const url = `${config["API_BASE"]}/sources`;
        const data = await super.fetch(url);
        return data.sources;
    }

    render(sources){
        const selectElement = document.getElementById("channelFilter");
        let selectElementOptions='<option value="select-channel">Select Channel</option>';

        sources.map(({ id, name }) => {
            selectElementOptions += `<option value='${id}'>${name}</option>`;
        });
        selectElement.innerHTML = selectElementOptions;
    }
}

export default SourcesComponent;