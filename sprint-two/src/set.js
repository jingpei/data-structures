var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  item = this.shouldBeStringified(item);
  if(!this.contains(item)){
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  item = this.shouldBeStringified(item);
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item){
  item = this.shouldBeStringified(item);
  this._storage.splice(_.indexOf(this._storage, item), 1);
};

setPrototype.shouldBeStringified = function(item) {
  if (typeof item === 'object') {
    return JSON.stringify(item);
  } else {
    return item;
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
