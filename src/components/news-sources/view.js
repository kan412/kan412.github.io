class NewsSourcesView{
    constructor(controller){
        this.controller = controller;
        this.subscribe();
    }

    dropDown = () => document.getElementById('channelFilter');

    subscribe(){
        const selectElement = this.dropDown();
        selectElement.addEventListener('change', ({ target }) => this.setActiveSource(target.value) );
    }

    setActiveSource = (source) => {
        const selectElement = this.dropDown();
        selectElement.value = source;
        this.controller.changeSource(source);
    }
  
    render(sources){
        const selectElement = this.dropDown();
        let selectElementOptions = "";
        sources.map(({ id, name }) => {
            selectElementOptions += `<option value='${id}'>${name}</option>`;
        });

        selectElement.innerHTML = selectElementOptions;
    }
}

export default NewsSourcesView;