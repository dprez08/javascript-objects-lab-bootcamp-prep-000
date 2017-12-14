var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({},object, {[key]: value});
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key, value){
  object = value;
  return object;
}
