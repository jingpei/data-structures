var Queue = function(){
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var dequeued = storage[0];
    for(var i = 0; i < size-1; i++){
      storage[i] = storage[i+1];
    }
    delete storage[size-1];
    size > 0 ? size-- : size = 0;
    return dequeued;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
