import ErrorHandlerComponent from '../../core/error-handling';

class ApiFetcher{
    async fetch(url, options){
        try{
            const response = await fetch(url, options);

            if(response.ok){
                const data = await response.json();
                return data;
            }else{
                throw({ 
                    status: response.status,
                    statusText: response.statusText
                });    
            }  
        }catch(error){
            const errorPopup = await ErrorHandlerComponent.getInstance();
            errorPopup.render(error);
        }
    }
}

export default ApiFetcher;