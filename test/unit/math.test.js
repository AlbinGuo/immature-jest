const { add, minus } = require('./math')

test('测试加法', () => {
  expect(add(1, 2)).toBe(3)
})

test('测试减法', () => {
  expect(minus(3, 1)).toBe(2)
})