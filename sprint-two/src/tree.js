var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = new Tree(value);
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
