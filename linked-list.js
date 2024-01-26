import Node from './node.js';

export default class LinkedList {
    constructor(headNode = null) {
        this.headNode = headNode;
    }

    append(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
        } else {
            let pointer = this.headNode;
            while (pointer.nextNode) {
                pointer = pointer.nextNode;
            }
            pointer.nextNode = new Node(value);
        }
    }
}