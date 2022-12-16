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

describe('My Stack', () => {
    
    let stack;
    
    beforeEach(() => {
        stack = new Stack();
    });
    
    it('is created empty', () => {  

        expect(stack).toEqual({ top: -1, items: {} }); 
        expect(stack.items).toEqual({});
    });
    
    it('can pop a value off the new stack', () => {
        stack.pop();

        expect(stack).toEqual({ top: -2, items: {} });
        expect(stack.items).toEqual({});
    });

    it('can push a value on to the new stack', () => {     
        stack.push('🔵');  

        expect(stack).toEqual({ top: 0, items: { 0: '🔵' } });
        expect(stack.items[0]).toBe('🔵');
    });


    it('can push one value on the stack and pop it off again', () => {
        stack.push('🔵');
        stack.pop();

        expect(stack).toEqual({ top: -1, items: {} });
        expect(stack.items).toEqual({});
    })

    it('can push one value on to the stack and then pop twice', () => {
        stack.push('🔵');
        stack.pop();
        stack.pop();

        expect(stack).toEqual({ top: -2, items: {} });
    })

    it('can push multiple values on to the top of the stack', () => {
        stack.push('🔵');
        stack.push('🔴');
        stack.push('🔮');
        stack.push('🌍');

        expect(stack.items[3]).toBe('🌍');
    });
    
    it('can push multiple values on to the top of the stack and then pop them all back off again', () => {
        stack.push('🔵');
        stack.push('🔴');
        stack.push('🔮');
        stack.push('🌍');
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();

        expect(stack).toEqual({ top: -1, items: {} });
        expect(stack.items).toEqual({});
    });

    it('given a stack with (2 values) can pop twice(remove them) then push a new value on', () => {
        stack.push('🔵');
        stack.push('🔴');

        stack.pop();
        stack.pop();
        stack.push('🔮');

        expect(stack).toEqual({ top: 0, items: { 0: '🔮' } });
        expect(stack.items[0]).toBe('🔮')
    });

    
    
    it('given a stack with (1 value), pop that value off then push a new value on to the stack then pop it off again', () => {
        stack.push('🔵'); // single value
        
        stack.pop();
        stack.push('🔮'); // new value
        stack.pop();
        expect(stack).toEqual({ top: -1, items: {} });
    });
    
    it('can push two values on to an empty stack and pop the most recent value off', () => {
        stack.push('🔵');
        stack.push('🔴');
        stack.pop();
        expect(stack).toEqual({ top: 0, items: { 0: '🔵' } });
    })

    it('can push one value on the stack then pop it back off, then push one new value on in its place(replace an item in the stack)', () => {
        stack.push('🔵');
        stack.pop();
        stack.push('🔮');
        expect(stack).toEqual({ top: 0, items: { 0: '🔮' } });
    })
})