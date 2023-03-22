
import {  it, expect,vi, beforeEach  } from 'vitest'

function warnLater(message:string){
   setTimeout(() => {
     console.log(message)
   }, 2000);
}

beforeEach(() => {
    vi.useFakeTimers() 
})

it(' warn later ', async () => {
const spy = vi.spyOn(console,'log')
warnLater('somebody did something wrong nigga')
expect(spy).not.toBeCalled()
// vi.advanceTimersByTime(1999)
// expect(spy).not.toBeCalled()
// vi.advanceTimersByTime(1)

// we can use vi advance to next timer also
vi.advanceTimersToNextTimer()


//this solves the issue but renders the test slow making it wait for the timer (inefficient)
// await new Promise(resolve => setTimeout(resolve,2000))
// expect(spy).toBeCalledTimes(1)
// expect(spy).toHaveBeenCalledWith('somebody did something wrong nigga')

 expect(spy).toHaveBeenCalledWith('somebody did something wrong nigga')
    

})
