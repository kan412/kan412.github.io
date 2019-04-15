function removeAllNumberKeys(json){
     Object.keys(json).forEach((key) => {
        const pattn = new RegExp(/^[0-9]*$/);
        const value = json[key];

        if( typeof value === "object"){
            removeAllNumberKeys(value);
        }else if(pattn.test(value)){
            delete json[key];
        }
     });
  
}

module.exports = (source) => {
   let json = JSON.parse(source);
   removeAllNumberKeys(json);
   let result = JSON.stringify(json);
   return `module.exports = ${result}`;
}