class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
//time: O(v + e) where v is verticle, e is the edge
//space : 0(v)
  depthFirstSearch(array) {
    // Write your code here.
		// console.log(array), array = []
		array.push(this.name);
		// console.log(array)
		for (const child of this.children) {
			child.depthFirstSearch(array);
			// console.log(child)
		}
		return array;
  }
}

// Do not edit the line below.
exports.Node = Node;