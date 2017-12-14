var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({},object, {[key]: value});
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key, value){
  recipes[key] = value;
  return recipes;
}
