import ApiFetcher from "./ApiFetcher";

class ApiRequestFactory{
    
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

var handler = {
    get: (target, propKey) => {
        return function(...args){
            console.log({ url: args[0], method: args[1], body: args[2] });
            return target[propKey].apply(this, args);
        }
    }
}


var target = new ApiRequestFactory();
var ApiRequestProxy = new Proxy(target, handler);

export default ApiRequestProxy;