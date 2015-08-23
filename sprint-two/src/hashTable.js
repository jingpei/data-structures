var HashTable = function(){
  this._limit = 4;
  this._storage = LimitedArray(this._limit);
  this._totalSize = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if(tuple[0] === k) {
      tuple[1] = v;
      this._storage.set(i, bucket);
      return;
    }
  }

  bucket.push([k,v]);
  this._storage.set(i, bucket);
  this._totalSize++;

  /* Resize */
  if(this._totalSize / this._limit  >= .75) {
    this._resize((2 * this._limit));
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if(tuple[0] === k) {
      return tuple[1];
    }
  }

  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if(tuple[0] === k) {
      bucket.splice(j, 1);
      this._totalSize--;
    }
  }

  if(bucket.length === 0) {
    this._storage.set(i, undefined);
  }

  /* Resize */
  if(this._totalSize / this._limit  < .25) {
    this._resize(Math.ceil((.5 * this._limit)));
  }

};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;
  this._storage = LimitedArray(newLimit);
  this._totalSize = 0;
  this._limit = newLimit;
  var allTuples = [];

  oldStorage.each(function(bucket) {
    if(bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        allTuples.push(tuple);
      };
    }
  });

  console.log(allTuples)

  this._redistribute(allTuples);

};

HashTable.prototype._redistribute = function(allTuples) {
  for (var i = 0; i < allTuples.length; i++) {
    var tuple = allTuples[i];
    this.insert(tuple[0], tuple[1]);
  };
};

HashTable.prototype._bucketCheck = function() {
  // body...
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
