class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    clear () {
        this.first = null;
        this.last = null;
        this.size = 0;
        return this;
    }
    print () {
        let currentNode = this.first;
        let arr = [];
        while (currentNode) {
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
    pop () {
        let poppedNode = this.first;
        if (!poppedNode) return null;
        if (poppedNode === this.last) {
            this.last = null;
            this.first = null;
        }
        else {
            this.first = poppedNode.next;
        }
        this.size--;
        return poppedNode;
    }
    push (val) {
        let newNode = new StackNode(val);
        let first = this.first;
        if (!first) {
            first = newNode;
            this.last = newNode;
        }
        else {
            newNode.next = first;
            first = newNode;
        }
        this.first = first;
        this.size++;
        return this;
    }
    peek () {
        return this.first;
    }
    isEmpty () {
        return !this.size;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.print();