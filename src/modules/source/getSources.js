import {sourceAPI} from '../variables';
import {renderSelectElement} from "./renderSources";

export async function renderNewsChannels(){
    try {
        const response = await fetch(sourceAPI);
        const data = await response.json();
        return renderSelectElement(data);
    }
    catch (error) {
        return console.log(error);
    }
}
