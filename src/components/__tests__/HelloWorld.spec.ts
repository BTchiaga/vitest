import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  function sum(...numbers):number{
    return numbers.reduce((x, y) => x+y,0)
  }
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
    
  })
  test('it compares numbers',()=>{
    expect(2).toBeGreaterThan(1)
   
  })
  test('it compares strings',()=>{
    expect('karoline').not.toEqual('zen')
    expect('karoline').not.toEqual('linkora')
    expect('good').toContain('o')
  })

  test('it test rest array function',()=>{
    expect( sum(1,2,4).toString()).toEqual('7')
  })

   test('sums 10 numbers',()=>{
    expect( sum(1,2,3,4,5,6,7,8,9,10).toString()).toEqual('55')
  })
   test('sums no number',()=>{
    expect( sum()).toEqual(0)
  })
   test('sums 1 number',()=>{
    expect( sum(4465)).toEqual(4465)
  })
})
