module.exports = (source) => {
   let json = JSON.parse(source);
    
   json.forEach(element => {
       for(var key in element){
            const pattn = new RegExp(/^[0-9]*$/);
            if(pattn.test(key) === true){
                delete element[key];
            }
       }
   });
   
   let result = JSON.stringify(json);
   return result;
}