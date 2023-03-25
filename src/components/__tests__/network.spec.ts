
import {  it, expect,vi, beforeAll, afterAll  } from 'vitest'
import { getPostBody } from '@/network'


//mocking the fetch function using stubglobal because fetch is a global fucntion
// vi.stubGlobal('fetch',async () => {
//     return {
//         json(){
//             return {
//                 body:'foo bar'
//             }
//         }
//     }
// })



it('should fetch posts ', async () =>{
const result = await getPostBody(10)
expect(result).toMatchInlineSnapshot('"mocked"')
} )