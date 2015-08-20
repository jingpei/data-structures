var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);
    /* Update node.next on the current tail*/
    if(list.head === null){
      list.head = node;
    } else {
      list.tail.next = node;
    }

    /* Update list.tail to new node */
    list.tail = node;
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target){
    var checkNode = function(node){
      if(node.value === target){
        return true;
      } else if(node.next === null) {
        return false;
      } else {
        return checkNode(node.next);
      }
    }

    return checkNode(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
