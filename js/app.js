class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// FIFO
class Queue {
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
        let current = this.last;
        let arr = [];
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    enqueue (val) {
        let enqueueNode = new QueueNode(val);
        if (!this.first) {
            this.first = enqueueNode;
            this.last = enqueueNode;
            this.size++;
            return this;
        }
        else {
            enqueueNode.next = this.last;
            this.last = enqueueNode;
        }
        this.size++;
        return this;
    }
    dequeue () {
        let dequeued = this.last;
        if (!dequeued) return dequeued;
        if (this.first === dequeued) {
            this.first = null;
            this.last = null;
        }
        this.last = dequeued.next;
        this.size--;
        return dequeued;
    }
    peek () {
        return this.first;
    }
    isEmpty () {
        return !this.first;
    }
}

let q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.print();