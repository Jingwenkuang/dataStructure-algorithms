/*Give a Node class that has a name and an array of optoinal children
nodes. when put together, nodes form an acyclic tree-like structure.
Implement the breathFirstSearch method on the Node class, which takes in an
empty array, traverses the tree using the depth-first search approach, 
stores all of the nodes' names in the input array and returns it.
*/


class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

	//time: o(v + n), space o(v)
  breadthFirstSearch(array) {
    // Write your code here.
		
		let queue = [this];
		while(queue.length) {
			let node = queue.shift();
				array.push(node.name);
			
			for (let child of node.children) {
				queue.push(child)
			}
		}
		return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
