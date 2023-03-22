import { describe, it, expect,vi } from 'vitest'
import {  greetings } from '@/index'


//vi mock has to be at the top level to repace at run time

it('spying on console log',() => {
    const spy = vi.spyOn(console,'log')
    greetings('Danick')
    greetings('Yves')

    //to test the order we could access the spy.mock.calls values made to the spy
    //Its is a two dimensional array in which [here indicates the order][the position of the arguments]
    expect(spy.mock.calls[1][0]).toBe('Hello Yves')
    expect(spy.mock.calls[0][0]).toBe('Hello Danick')
    expect(spy).toHaveBeenCalledTimes(2)

    //or test each call seperately resetting the calls 
    spy.mockReset()
   
    greetings('Danick')
    expect(spy).toBeCalledWith('Hello Danick')
    expect(spy).toHaveBeenCalledTimes(1)
     spy.mockReset()

    greetings('Aurel')
    expect(spy).toBeCalledWith('Hello Aurel')
    expect(spy).toHaveBeenCalledTimes(1)

    expect(spy).toMatchInlineSnapshot(`
      [MockFunction log] {
        "calls": [
          [
            "Hello Aurel",
          ],
        ],
        "results": [
          {
            "type": "return",
            "value": undefined,
          },
        ],
      }
    `)

})