function removeAllNumberKeys(obj){
     Object.keys(obj).forEach((key) => {
        const pattn = new RegExp(/^[0-9]*$/);
        const value = obj[key];

        if( typeof value === "object"){
            removeAllNumberKeys(value);
        }else if(pattn.test(value)){
            delete obj[key];
        }
     });
  
}

module.exports = (source) => {
   let json = JSON.parse(source);
   removeAllNumberKeys(json);
   let result = JSON.stringify(json);
   return `module.exports = ${result}`;
}