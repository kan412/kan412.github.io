import {channelFilter} from '../variables';

export function renderSelectElement(data){
    const selectElement = channelFilter;
    let selectElementOptions='<option value="select-channel">Select Channel</option>';
    data.sources.map(({ id, name }) => {
        selectElementOptions += `<option value='${id}'>${name}</option>`;
    });
    selectElement.innerHTML = selectElementOptions;
}