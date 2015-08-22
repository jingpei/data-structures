var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this.contains(item)){
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item){
  this._storage.splice(_.indexOf(this._storage, item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
