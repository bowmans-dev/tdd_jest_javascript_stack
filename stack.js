class Stack {
    constructor() {
        this.top = -1
        this.items = {}
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop(value) {
        delete this.items[this.top];
        this.top -= 1;
    }
}
const stack = new Stack();