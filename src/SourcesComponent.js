import ApiFetcher from './ApiFetcher';

class SourcesComponent extends ApiFetcher{
    constructor(){

    }

    fetch(api){
        return super.fetch(api);
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