import Node from "./Node.js";

class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this.root !== null;
        } else {
            return this.insertNode(this.root, value);
        }
    }

    insertNode(node, value) {
        if (value.add < node.value.add) {
            if (node.left === null) {
                node.left = new Node(value);
                return node.left !== null;
            } else {
                return this.insertNode(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new Node(value);
                return node.right !== null;
            } else {
                return this.insertNode(node.right, value);
            }
        }
    }

    search(add) {
        return this.searchNode(this.root, add);
    }

    searchNode(node, add) {
        if (node === null || node.value.add === add) {
            return node;
        } else if (add < node.value.add) {
            return this.searchNode(node.left, add);
        } else {
            return this.searchNode(node.right, add);
        }
    }

    min() {
        return this.minNode(this.root);
    }

    minNode(node) {
        if (node === null) {
            return null;
        }
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }

    max() {
        return this.maxNode(this.root);
    }

    maxNode(node) {
        if (node === null) {
            return null;
        }
        while (node.right !== null) {
            node = node.right;
        }
        return node.value;
    }

    impresion(callback) {
        this.inOrderTraversal(this.root, callback);
    }

    inOrderTraversal(node, callback) {
        if (node !== null) {
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }else{
            return
        }
    }
}

export default BST;
