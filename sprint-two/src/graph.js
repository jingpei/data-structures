

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = {};
};


// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  var addedNode = new graphNode(node);
  this.nodes[addedNode.value] = addedNode;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if (this.nodes[node]) {
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this.nodes[fromNode].edges, this.nodes[toNode]) && _.contains(this.nodes[toNode].edges, this.nodes[fromNode]);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges.push(this.nodes[toNode]);
  this.nodes[toNode].edges.push(this.nodes[fromNode]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var indexFrom = _.indexOf(this.nodes[fromNode].edges, this.nodes[toNode]);
  var indexTo = _.indexOf(this.nodes[toNode].edges, this.nodes[fromNode]);

  this.nodes[fromNode].edges.splice(indexFrom, 1);
  this.nodes[toNode].edges.splice(indexTo, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var node in this.nodes){
    cb(node);
  } 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 var graphNode = function(value) {
   this.value = value;
   this.edges = [];
 }
