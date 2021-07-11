class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    clear () {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
    }
    print () {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    push (val) {
        let pushNode = new Node(val);
        if (!this.head) {
            this.head = pushNode;
            this.tail = pushNode;
        }
        else {
            this.tail.next = pushNode;
            pushNode.prev = this.tail;
            this.tail = pushNode;
        }
        this.length++;
        return this;
    }
    pop () {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift () {
        if (!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift (val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get (index) {
        if (index < 0 || index >= this.length || typeof (index) !== "number") return null;
        let currentNode = null;
        let count = 0;
        if (index <= this.length / 2) {
            currentNode = this.head;
            // for (let i = 0; i < index; i++) {
            //     currentNode = this.head.next;
            // }
            while (count !== index) {
                currentNode = currentNode.next;
                count++;
            }
        }
        else {
            count = this.length - 1;
            currentNode = this.tail;
            // for (let i = this.length - 1; i > index; i--) {
            //     currentNode = this.tail.prev;
            // }
            while (count !== index) {
                currentNode = currentNode.prev;
                count--;
            }
        }
        return currentNode;
    }
    set (index, val) {
        let getNode = this.get(index);
        if (!getNode) {
            return false;
        }
        getNode.val = val;
        return true;
    }
    insert (index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let prev = this.get(index - 1);
        let next = prev.next;
        let insert = new Node(val);

        insert.prev = prev, prev.next = insert;
        insert.next = next, next.prev = insert;
        this.length++;
        return !!insert;
    }
    remove (index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removed = this.get(index);
        let prev = removed.prev;
        let next = removed.next;

        prev.next = next, next.prev = prev;
        removed.next = null, removed.prev = null;

        this.length--;
        return removed;
    }
    reverse () {
        if (!this.head) return null;
        this.tail = this.head;

        let current = this.tail;
        let prev = null;
        let next = null;

        while (current) {
            next = current.prev, prev = current.next;
            current.prev = prev, current.next = next;
            current = current.prev;
        }

        this.head = next.prev;
        return this;
    }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);


