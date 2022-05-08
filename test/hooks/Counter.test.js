import Counter from './Counter';

describe('Counter测试',() => {
  let counter = null

  beforeAll(() => {
    console.log('beforeAll')
  })

  afterAll(() => {
    console.log('afterAll')
  })

  /**
   * 每次执行测试之前都会执行beforeEach
   */
  beforeEach(() => {
    console.log('beforeEach')
    counter = new Counter()
  })

  /**
   * 每次执行测试之后都会执行afterEach
   */
  afterEach(() => {
    console.log('afterEach')
  })

  /**
   * 分组：测试addOne方法
   */
  describe('测试增加相关代码', () => {
    test('测试Counter中addOne方法1', () => {
      console.log('测试Counter中addOne方法1')
      counter.addOne();
      expect(counter.number).toBe(1);
    })
    
    test('测试Counter中addOne方法2', () => {
      console.log('测试Counter中addOne方法2')
      counter.addOne();
      expect(counter.number).toBe(1);
    })
  })

  /**
   * 分组：测试minusOne方法
   */
  describe('测试减法相关代码', () => {
    test('测试Counter中minus方法1', () => {
      console.log('测试Counter中minus方法1')
      counter.minusOne();
      expect(counter.number).toBe(-1);
    })
    
    test('测试Counter中minus方法2', () => {
      console.log('测试Counter中minus方法2')
      counter.minusOne();
      expect(counter.number).toBe(-1);
    })
  })
})