var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = new Tree(value);
  childTree.parent = this;
  this.children.push(childTree);

};

treeMethods.contains = function(target){
  var doesContain = false;

  var checkChildren = function(parent) {
    if (parent.value === target) {
      doesContain = true;
    } else if (parent.children.length > 0) {
      /* Recurse */
      for (var i = 0; i < parent.children.length; i++) {
        checkChildren(parent.children[i]);
      }
    }
  }

  checkChildren(this);
  return doesContain;
};

treeMethods.removeFromParent = function(child){
  
  var findChild = function(tree, indexInParent){
    indexInParent = indexInParent;
    if (tree.value === child){
      killChild(tree, indexInParent);
    } else if (tree.children.length > 0) {
      for (var i = 0; i < tree.children.length; i++) {
        findChild(tree.children[i], i);
      };
    }
  }

  function killChild(tree, index) {
    /* Corrects Parents (splice it parents array) */
    if(tree.parent !== null){
      tree.parent.children.splice(index, 1);
      console.log(_.indexOf(tree.parent.children, tree));
    }

    /* Sets its parent */
    tree.parent = null;
    /* Return Child */
    return tree;
  }

  findChild(this);
};

treeMethods.traverse = function(callback) {
  var applyCallback = function(tree){
    callback(tree);
    if(tree.children.length > 0){
      for (var i = 0; i < tree.children.length; i++) {
        applyCallback(tree.children[i]);
      };
    }
  }

  applyCallback(this);
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
