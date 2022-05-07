let result = add(1, 2);
const expected = 3;

if(result !== 3) {
  throw new Error(`1 + 2应该等于 ${expected}, 但是结果却是${result}`)
}