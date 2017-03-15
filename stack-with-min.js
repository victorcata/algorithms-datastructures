// Implementation of a min stack without arrays

function MinStack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
    this._min = new Stack();
}

MinStack.prototype.push = function(value) {
    if (this._count < this._capacity) {
        if (this._min.peek() && this._min.peek() < value) {
            this._min.push(this._min.peek());
        } else {
            this._min.push(value);
        }

        this._storage[this._count++] = value;
        return this._count;
    } 
    return 'Max capacity reached';
}

MinStack.prototype.pop = function() {
    if (this._count > 0) {
        var val = this._storage[--this._count];
        delete this._storage[this._count];
        this._min.pop();
        return val;
    }
    return 'No items in the stack';
}

MinStack.prototype.peek = function() {
    return this._storage[this._count - 1];
}

MinStack.prototype.count = function() {
    return this._count;
}