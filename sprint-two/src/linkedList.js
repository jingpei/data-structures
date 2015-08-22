var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);
    /* Update node.next on the current tail*/
    node.prev = list.tail;
    var oldTail = list.tail;

    if(list.head === null){
      list.head = node;
    } else {
      oldTail.next = node;
    }

    /* Update list.tail to new node */
    list.tail = node;
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    if (list.head !== null) {
      list.head.prev = null; 
    };
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

  list.removeTail = function() {
    var tempTail = list.tail;
    list.tail = list.tail.prev;
    if (list.tail !== null) {
      list.tail.next = null;
    };
    return tempTail.value;
  }

  list.addToHead = function(value){
    var node = new Node(value);

    var oldHead = list.head;
    if (list.tail === null) {
      list.tail = node;
    } else {
      list.head.prev = node;
    }

    list.head = node;
    list.head.next = oldHead;
  }

  return list;
};


var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
