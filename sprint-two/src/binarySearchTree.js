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
    if(tree.left){
      eachChild(tree.left);
    } else if(tree.right){
      eachChild(tree.right);
    }
  }
  eachChild(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
