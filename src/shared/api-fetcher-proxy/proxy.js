import ApiFetcherFactory from "../../lib/api-fetcher";

class ApiFetcherProxy{
   constructor(){
        this.factory = new ApiFetcherFactory();
   }

    handler = {
        get: (target, propKey) => {            
            return function(...args){
                console.log({ url: args[0], method: args[1], body: args[2] });
                return target[propKey].apply(this, args);
            }
        }
    };

    load(){
        return new Proxy(this.factory, this.handler);
    }
    
}

const proxy = new ApiFetcherProxy().load()
export default proxy;

