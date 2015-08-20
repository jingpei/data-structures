var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.sizeCounter = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.size()] = value;
    this.size("+");
  },
  dequeue: function() {
    var dequeued = this.storage[0];
    for (var i = 0; i < this.size() - 1; i++) {
      this.storage[i] = this.storage[i+1];
    }
    delete this.storage[this.size() - 1];
    this.size() > 0 ? this.size("-") : this.size("set");
    return dequeued;
  },
  size: function() {
    if (arguments[0] === "+") {
      this.sizeCounter++;
    } else if (arguments[0] === "-") {
      this.sizeCounter--;
    } else if (arguments[0] === "set") {
      this.sizeCounter = 0;
    } else {
      return this.sizeCounter;
    }
  }
};
