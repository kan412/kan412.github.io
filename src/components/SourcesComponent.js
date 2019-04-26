import config from '../config.json';
import ApiRequestProxy from './ApiRequestFactory';

class SourcesComponent{

    async fetch(){
        const url = `${config["API_BASE"]}/sources`;
        const data = await ApiRequestProxy.request(url, 'GET');
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