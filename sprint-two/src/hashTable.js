var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i)) {
    var hashedObject = this._storage.get(i);
    hashedObject[k] = v;
  } else {
    var hashedObject = {};
    hashedObject[k] = v;
  }
  this._storage.set(i, hashedObject);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i) === undefined ? null : this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);   
  this._storage.each(function(item, index, storage) {
    if(index === i) {
      if (item && (Object.keys(item).length === 1)) {
        storage.splice(index, 1);
      } else if (item) {
        delete storage[index][k];
      }
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
