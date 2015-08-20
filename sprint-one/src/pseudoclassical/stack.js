var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.sizeCounter = 0;

};


var stackMethods = {
  push: function(value) {
    this.storage[this.sizeCounter] = value;
    this.sizeCounter++;
  },
  pop: function() {
    var popped = this.storage[this.sizeCounter - 1];
    delete this.storage[this.sizeCounter - 1];
    this.sizeCounter > 0 ? this.sizeCounter-- : this.sizeCounter = 0;
    return popped;
  },
  size: function() {
    return this.sizeCounter;
  }
};


// Stack.prototype.constructor = _.extend(Stack.prototype.constructor, stackMethods);

Stack.prototype.push = stackMethods["push"];
Stack.prototype.pop = stackMethods["pop"];
Stack.prototype.size = stackMethods["size"];
