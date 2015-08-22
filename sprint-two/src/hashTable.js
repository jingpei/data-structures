var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._uniqueInsertions = 0;
  //boolean
  this.checkResize = function(){
    //how many tuples currently exist?
    //what's the limit

  } 
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) !== undefined) {
    var tuplesArray = this._storage.get(i);
    var tupleExists = false;
    for (var j = 0; j < tuplesArray.length; j++) {
      if(tuplesArray[j][0] === k){
        tupleExists = true;
        tuplesArray[j][1] = v;
      }
    };
    if(!tupleExists){
      tuplesArray.push([k,v]);
      this._uniqueInsertions++;      
    }
  } else {
    var tuplesArray = [];
    var newTuple = [k,v];
    tuplesArray[0] = newTuple;
    this._uniqueInsertions++;
  }
  this._storage.set(i, tuplesArray);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value;
  _.each(this._storage.get(i), function(tuple){
    if(tuple[0] === k){
      value = tuple[1];
    }
  });
  return value === undefined ? null : value;
  // return this._storage.get(i) === undefined ? null : this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);   
  this._storage.each(function(tuplesArray, index, storage) {
    if(index === i) {
      if (tuplesArray !== undefined && (tuplesArray.length === 1)) {
        storage.splice(index, 1);
      } else if (tuplesArray) {
        var indexToSlice;
        for (var j = 0; j < tuplesArray.length; j++) {
          if(tuplesArray[j][0] === k){
            indexToSlice = j;
          }
        };
        tuplesArray.splice(indexToSlice, 1);
      }
    }
  });
  this._uniqueInsertions--; 
};

class_name.prototype.method_name = function(first_argument) {
  // body...
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
