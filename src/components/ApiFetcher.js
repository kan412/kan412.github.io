import ErrorHandlerComponent from './ErrorHandlerComponent';

class ApiFetcher{
    async fetch(url){
        try{
            const response = await fetch(url);
            console.log(response.status);
            //const data = await response.json();
            
            if(response.ok){
                //return data;
            }else{
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText
                })
            }
            
        }catch(error){
            console.log(error);

        }
    
    }
}

export default ApiFetcher;