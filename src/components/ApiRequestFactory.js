import ApiFetcher from "./ApiFetcher";

class ApiRequestFactory{
    
    request(url, method){
        const apiFetcher = new ApiFetcher();
        switch(method){
            case 'GET':
            return apiFetcher.fetch(url, { method: 'GET' });

            case 'POST':
            return apiFetcher.fetch(url, { method: 'POST' });

            case 'PUT':
            return apiFetcher.fetch(url, { method: 'PUT' });

            default:
            return apiFetcher.fetch(url);
        }
    }

}

export default ApiRequestFactory;