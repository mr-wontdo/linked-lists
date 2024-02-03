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

    prepend(value) {
        let pointer = this.headNode;
        this.headNode = new Node(value);
        this.headNode.nextNode = pointer;
    }

    size() {
        let count = 0;
        let pointer = this.headNode;
        while (pointer) {
            count++;
            pointer = pointer.nextNode;
        }
        return count;
    }

    head() {
        return this.headNode;
    };

    tail() {
        let pointer = this.headNode;
        while (pointer.nextNode) {
            pointer = pointer.nextNode;
        }
        return pointer;
    }    

    at(index) {
        let pointer = this.headNode;
        for (let i = 0; i < index; i++) {
            pointer = pointer.nextNode;
            if (pointer === null) return 'No value at this index.'
        }
        return pointer;
    }

    pop() {
        let pointer = this.headNode;
        while (pointer.nextNode.nextNode) {
            pointer = pointer.nextNode;
        }
        pointer.nextNode = null;
    }

    contains(value) {
        let pointer = this.headNode;
        while (pointer) {
            if (pointer.value === value) return true;
            pointer = pointer.nextNode;
        }
        return false;
    }
    
    find(value) {
        let index = 0;
        let pointer = this.headNode;
        while (pointer) {
            if (pointer.value === value) return index;
            index++;
            pointer = pointer.nextNode;
        }
        return null;
    }

    toString() {
        let string = '';
        let pointer = this.headNode;
        while (pointer) {
            string += `(${pointer.value}) -> `
            pointer = pointer.nextNode;
        }
        return string += 'null'
    }
}