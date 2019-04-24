import config from '../config.json';
import ApiRequestFactory from './ApiRequestFactory';

class SourcesComponent extends ApiRequestFactory{
    constructor(){
        super();
    }

    async fetch(){
        const url = `${config["API_BASE"]}/sources`;
        const data = await super.request(url, 'GET');
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