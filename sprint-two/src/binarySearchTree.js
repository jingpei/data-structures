var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var newBST = new BinarySearchTree(value);
  if (this.value > value) {
    this.right = newBST;
  }else {
    this.left = newBST;
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if (target === this.value) {
    return true;
  } else if (this.left === null && this.right === null) {
    return false;
  } else if(target > this.value) {
    this.contains(this.right);
  } else if(target < this.value) {
    this.contains(this.left);
  };
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
