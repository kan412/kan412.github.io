import ApiFetcher from "./ApiFetcher";

class ApiFetcherFactory{
    
    request(url, method, body){
        const apiFetcher = new ApiFetcher();
        switch(method){
            case 'GET':
            return apiFetcher.fetch(url, { method: 'GET' });

            case 'POST':
            return apiFetcher.fetch(url, { 
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            case 'PUT':
            return apiFetcher.fetch(url,{ 
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            default:
            return apiFetcher.fetch(url);
        }
    }

}

export default ApiFetcherFactory;