// Implement a queue without using an array

function Queue(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._head = 0;
    this._tail = 0;
}

Queue.prototype.enqueue = function(value) {
    if (this.count() < this._capacity) {
        this._storage[this._tail] = value;
        this._tail += 1;
        return;
    }

    return "Max capacity reached";
}

Queue.prototype.dequeue = function() {
    if (this.count() > 0) {
        var item = this._storage[this._head];
        delete this._storage[this._head];
        this._head += 1;
        return item;
    }   

    return "No items in the queue";
}

Queue.prototype.peek = function() {
    return this._storage[this._head];
}

Queue.prototype.count = function() {
    return this._tail - this._head;
}