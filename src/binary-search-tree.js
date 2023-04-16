const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.base = null
  }

  root() {
    return this.base
  }

  add(data) {
   this.base = addNewRoot(this.base, data);

   function addNewRoot(node, value) {
    if (!node) {
      return new Node(value)
    }
    if (node.data === value) {
      return node
    }
    if (value < node.data) {
      node.left = addNewRoot(node.left, value)
    } else {
      node.right = addNewRoot(node.right, value)
    }
    return node
   }
  }

  has(data) {
    return searchWithin(this.base, data)

    function searchWithin(node, value) {
      if(node === null) {
        return false
      }
      if (node.data === value) {
        return true
      }
      if (value < node.data) {
        return searchWithin(node.left, value)
      } else {
        return searchWithin(node.right, value)
      }
    }
  }

  find(data) {
    return findWithin(this.base, data);

    function findWithin(node, value){
      if(node === null) {
        return null;
      }
      if (node.data === value) {
        return node;
      }
      if (findWithin(node.left, value)) {
        return findWithin(node.left, value)
      } else {
        return findWithin(node.right, value)
      }
      }
    }
  

  remove(data) {
    this.base = removeNode(this.base, data);

    function removeNode(node, value) {
      if (node === null) {
        return null
      }
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }

        let maхFromLeft = node.left;
        while (maхFromLeft.right) {
          maхFromLeft = maхFromLeft.right
        }
        node.data = maхFromLeft.data;
        node.left = removeNode(node.left, maхFromLeft.data);
        return node;
      }
    }
  }

  min() {
    if(!this.base) {
      return;
    }
    let node = this.base;
    while (node.left) {
      node = node.left;
    }
    return node.data
  }

  max() {
    if(!this.base) {
      return;
    }
    let node = this.base;
    while (node.right) {
      node = node.right;
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};
