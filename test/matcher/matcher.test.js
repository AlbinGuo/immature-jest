/**
 * toBe匹配器
 */
// test('测试1和1相匹配', () => {
//   // toBe匹配器matchers object.is === 
//   const a = { one: 1 }
//   expect(a).toBe({ one: 1 }) // 引用不同,匹配失败
// })

/**
 * toEqual匹配器
 */
test('测试对象的内容相等', () => {
  const a = {one: 1}
  expect(a).toEqual({one: 1}) // 引用相同,匹配成功
})

/**
 * null匹配器
 */
test('测试null', () => {
  const a = null
  expect(a).toBeNull() // 引用相同,匹配成功
})

/**
 * undefined匹配器
 */
test('测试undefined', () => {
  const a = undefined
  expect(a).toBeUndefined() // 匹配成功 (严格匹配)
})

