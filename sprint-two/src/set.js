var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this.contains(item)){
    this.storage.push(item);
  }
};

setPrototype.contains = function(item){
  return _.contains(this.storage, item);
};

setPrototype.remove = function(item){
  this.storage.splice(_.indexOf(this.storage, item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
