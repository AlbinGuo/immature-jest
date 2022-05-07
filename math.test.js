// let result = add(1, 2);
// const expected = 3;

// if(result !== 3) {
//   throw new Error(`1 + 2应该等于 ${expected}, 但是结果却是${result}`)
// }


function expect(result) {
  return {
    toBe(expected){
      if(result !== expected) {
        throw new Error(`预期的结果和实际值不相等，预期值是${expected}，实际值是${result}`)
      }
    }
  }
}

expect(add(1, 2)).toBe(3);
expect(minus(3, 1)).toBe(2);