var _ = require('lodash');

//
function sifter(source, schema, isAutoFill) {
    var obj = {};
    for(var key in schema){
      var sourceValue = source[key];

      if(sourceValue === undefined){
        if(isAutoFill){
          obj[key] = "";
        }else{
          continue;
        }
      }else{
        if(_.isString(sourceValue) || _.isNumber(sourceValue) || _.isBoolean(sourceValue)){
          obj[key] = sourceValue
        }else if(_.isArray(sourceValue)){
          var subSchema = schema[key];
          obj[key] = sourceValue.reduce(function(prev,current){
            var reobject = sifter(current,subSchema);
            if(!_.isEmpty(reobject))
              prev.push(reobject);
            return prev;
          },[]);
        }else if(_.isObject(sourceValue)){

          if(schema[key] === ""){
            obj[key] = sourceValue;
          }else{
            obj[key] = sifter(sourceValue,schema[key]);
          }

        }else{
          // not do anything

        }
      }
    }
    return obj;
}

exports.sifter = sifter;
