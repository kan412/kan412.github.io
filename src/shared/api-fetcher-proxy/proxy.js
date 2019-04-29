import ApiFetcherFactory from "../../lib/api-fetcher";

class ApiFetcherProxy{

    constructor(){
        const target = new ApiFetcherFactory();
        const ApiRequestProxy = new Proxy(target, this.handler);
    }

   handler = {
        get: (target, propKey) => {
            return function(...args){
                console.log({ url: args[0], method: args[1], body: args[2] });
                return target[propKey].apply(this, args);
            }
        }
    };
}

export default ApiFetcherProxy;