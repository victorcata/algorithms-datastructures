// Implement a queue without using an array

function Queue_Stacks(capacity) {
    this._stackIn = new Stack();
    this._stackOut = new Stack();
}


Queue_Stacks.prototype.enqueue = function(value) {
    this._stackIn.push(value);
}

Queue_Stacks.prototype.transferStacks = function() {
    while (this._stackIn.count()) {
        this._stackOut.push(this._stackIn.pop());
    }
}

Queue_Stacks.prototype.dequeue = function() {
    if (this._stackOut.count() === 0) this.transferStacks();
    this._stackOut.pop();
}

Queue_Stacks.prototype.count = function() {
    return this._stackIn.count() + this._stackOut.count();
}