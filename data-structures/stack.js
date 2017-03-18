// Implementation of a stack without arrays

function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
}

Stack.prototype.push = function(value) {
    if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    } 
    return 'Max capacity reached';
}

Stack.prototype.pop = function() {
    if (this._count > 0) {
        var val = this._storage[--this._count];
        delete this._storage[this._count];
        return val;
    }
    return 'No items in the stack';
}

Stack.prototype.peek = function() {
    return this._storage[this._count - 1];
}

Stack.prototype.count = function() {
    return this._count;
}