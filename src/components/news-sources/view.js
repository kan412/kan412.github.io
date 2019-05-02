class NewsSourcesView{
    constructor(controller){
        this.controller = controller;
        this.handleChangeEvent();
    }

    handleChangeEvent(){
        const selectElement = document.getElementById('channelFilter');
        selectElement.addEventListener('change', ({ target }) => this.controller.changeSource(target.value) );
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

export default NewsSourcesView;