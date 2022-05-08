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

/**
 * toBeTruthy匹配器
 */
test('测试布尔值', () => {
  const a = true
  expect(a).toBeTruthy() // 匹配成功
})

/**
 * toBeFalsy匹配器
 */
test('测试布尔值', () => {
  const a = false
  expect(a).toBeFalsy() // 匹配成功
})

///////////////////////// 数字相关匹配器 ///////////////////////////////
/**
 * toBeCloseTo匹配器【计算浮点数】
 */
test('测试计算浮点数', () => {
  const a = 0.1
  const b = 0.2
  expect(a + b).toBeCloseTo(0.3) // 匹配成功
})
/**
 * toBeGreaterThan匹配器
 */
/**
 * toBeGreaterThanOrEqual匹配器
 */
/**
 * toBeLessThan匹配器
 */
/**
 * toBeLessThanOrEqual匹配器
 */
/**
 * toBeNaN匹配器
 */
/**
 * toBeNegativeInfinity匹配器
 */

///////////////////////// 字符串相关匹配器 ///////////////////////////////
/**
 * toMatch匹配器
 */
test('测试字符串', () => {
  const a = 'guo-nan'
  expect(a).toMatch(/guo/) // 匹配成功
})

///////////////////////// Array - Set相关匹配器 ///////////////////////////////
/**
 * toContain匹配器
 */
test('测试数组', () => {
  const a = [1, 2, 3] // new Set([1, 2, 3])
  expect(a).toContain(2) // 匹配成功
})

const throwNewError = () => {
  throw new Error('this is ass error')
}

/**
 * 异常匹配器
 */
test('测试异常', () => {
  expect(throwNewError).toThrow(/this is an error/)
})