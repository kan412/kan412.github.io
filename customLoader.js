function removeAllNumberKeys(jsonObj){
    for(var key in jsonObj){

        const pattn = new RegExp(/^[0-9]*$/);

        if( jsonObj.hasOwnProperty(key) && pattn.test(key) === false ){
            let childObj = jsonObj[key];
            removeAllNumberKeys(childObj);
        }else if(pattn.test(key) === true){
            delete jsonObj[key];
        }
    }
  
}

module.exports = (source) => {
   let json = JSON.parse(source);
   removeAllNumberKeys(json);
   let result = JSON.stringify(json);
   return result;
}