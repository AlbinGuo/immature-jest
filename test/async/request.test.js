import { fetchData } from '../../fetch'

// test('异步请求的返回结果是：{success: true}', (done) => {
//     fetchData(data => { 
//       expect(data).toEqual({
//         success: true
//     })
//     done()
//   })
// })

test('异步请求的返回结果是：{success: true}', async (done) => {
  const res = await fetchData()
  if(res.data){
    expect(res.data).toEqual({
      success: true
    })
  }
  done()
})

test('fetchData返回结果为 404', () => {
  expect.assertions(1) // 表示期望有一个断言，expect会执行一次
  return fetchData().catch(e => {
    expect(e.toString().indexOf('404') > -1).toBe(true)
  })
})

test('fetchData返回结果为 { success: true }', () => {
  return expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})

test('fetchData返回结果为 404', () => {
  return expect(fetchData()).rejects.toThrow('404')
})

test('fetch async', async () => {
  try{
    await fetchData()
  }catch(e){
    expect(e.toString()).toEqual('Error: Request failed with status code 404')
  }
})