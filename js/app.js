class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    clear () {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return list;
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
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++;
        return newNode;
    }
    pop () {
        if (!this.length) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        newTail.next = null;
        this.length--;
        if (!this.length) {
            this.head = null;
        }
        return current;
    }
    shift () {
        if (!this.length) return undefined;
        let shifted = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 1) {
            this.tail = this.head;
        }
        return shifted;
    }
    unshift (val) {
        let newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this.head;
    }
    // get
    get (idx) {
        if (typeof (idx) !== "number" || idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.head;
        let current = this.head;
        for (let i = 0; i !== idx; i++) {
            current = current.next;
        }
        return current;
    }
    // set
    set (idx, val) {
        if (typeof (idx) !== "number" || idx < 0 || idx >= this.length) return undefined;
        let foundNode = this.get(idx);
        if (!foundNode || foundNode === "undefined") return undefined;
        foundNode.val = val;
        return foundNode;
    }
    // insert
    insert (idx, val) {
        if (typeof (idx) !== "number" || idx < 0 || idx > this.length) return undefined;
        if (idx === 0) return this.unshift(val);
        if (idx === this.length) return this.push(val);
        let newNode = new Node(val);
        let prev = this.get(idx - 1);
        let prevNext = prev.next;
        prevNext = newNode;
        newNode.next = prevNext;
        this.length++;
        return newNode;
    }
    // remove
    remove (idx) {
        if (typeof (idx) !== "number" || idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        let prev = this.get(idx - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    // reverse
    reverse () {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let prev = null;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);