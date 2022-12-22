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
    // to prevent popping a value off the stack when it's empty
    if (this.top < -1) {
      this.top = -1;
    }
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
    
  it('can push a value on the stack and pop it off', () => {
    stack.push('🔴');
    stack.pop();
    
    expect(stack).toEqual({ top: -1, items: {} });
    expect(stack.items).toEqual({});
  })
    
  it('is not able to pop a value off from the newly created empty stack', () => {    
    stack.pop();

    expect(stack).toEqual({ top: -1, items: {} });
    expect(stack.items).toEqual({});
  });

  it('can push multiple values on to the stack in the correct order, where the last value added is positioned at the top of the stack', () => {
    stack.push('🔴');
    stack.push('🍏');
    stack.push('🔮');

    // console.log("RESULT: ",stack.items[2] + "...", "expected result: 🔮 is at the top of the stack ⬇︎");      
    // console.log("RESULT: ",stack)
    expect(stack.items[2]).toBe('🔮');
  });
  
  it('can push 2 values on to the stack, and then pop them off in the correct order', () => {
    stack.push('🍏');
    stack.push('🔮');
    stack.pop();

    // console.log(stack.items, "expected value 🍏 - is displayed as the final value remaining before the last pop");      
    expect(stack.items).toEqual({"0": "🍏"});
  });

  it('given a stack with 2 values, can pop twice to empty the stack, then push a new value on', () => {
    stack.push('🔵');
    stack.push('🔴');
    stack.pop();
    stack.pop();
    stack.push('🔮');
    expect(stack).toEqual({ top: 0, items: { 0: '🔮' } });
    expect(stack.items[0]).toBe('🔮')
  });

})