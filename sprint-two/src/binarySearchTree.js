var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var newBST = new BinarySearchTree(value);
  if (this.value > value) {
    if (this.left !== null) {
      this.left.insert(value);
    } else {
      this.left = newBST;
    }
  } else if (this.value < value) {
    if (this.right !== null) {
      this.right.insert(value);
    }else {
      this.right = newBST;
    } 
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if (target === this.value) {
    return true;
  } else if (this.left === null && this.right === null) {
    return false;
  } else if(target > this.value) {
    return this.right.contains(target);
  } else if(target < this.value) {
    return this.left.contains(target);
  };
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  var eachChild = function(tree){
    callback(tree.value);
    if(tree.left !== null){
      eachChild(tree.left);
    } 
    if(tree.right !== null){
      eachChild(tree.right);
    }
  }
  eachChild(this);
};

BinarySearchTree.prototype.breadthFirstLog = function(callback) {
  var breadthQueue = new Queue();
  // debugger
  var eachChild = function(tree){
    console.log(tree);
    callback(tree.value);
    if(tree.left !== null){
      breadthQueue.enqueue(tree.left);
    } 
    if(tree.right !== null){
      breadthQueue.enqueue(tree.right);
    }

    if (breadthQueue.size() > 0) {
      eachChild(breadthQueue.dequeue());
    }
  }
  
  eachChild(this);
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeCounter = 0;

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

Queue.prototype.enqueue = queueMethods["enqueue"];
Queue.prototype.dequeue = queueMethods["dequeue"];
Queue.prototype.size = queueMethods["size"];

/*
 * Complexity: What is the time complexity of the above functions?
 */
