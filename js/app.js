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
        this.length = 0;
    }
    clear () {
        this.first = null;
        this.last = null;
        this.length = 0;
        return this;
    }
    print () {
        let currentNode = this.last;
        let arr = [];
        while (currentNode) {
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
    pop () {
        let poppedNode = this.last;
        if (!poppedNode) return null;
        if (poppedNode === this.first) {
            this.last = null;
            this.first = null;
        }
        else {
            this.last = poppedNode.next;
        }
        this.length--;
        return poppedNode;
    }
    push (val) {
        let newNode = new StackNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            newNode.next = this.last;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    peek () {
        return this.last;
    }
    isEmpty () {
        return !this.length;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.print();