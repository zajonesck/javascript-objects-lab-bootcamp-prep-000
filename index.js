var recipes = {}
function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj[key];
}
function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj[key];
  return obj;
}
