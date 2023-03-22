import {  it, expect,vi } from 'vitest'

function getCurrentTime(){
    return new Date().toTimeString().slice(0,5)
}

it(' gets the correct time',() => {

    //use provided time 
    vi.setSystemTime(new Date('2022-03-03 22:30'))
    expect(getCurrentTime()).toMatchInlineSnapshot('"22:30"')

    vi.setSystemTime(new Date('2020-03-03 18:30'))
    expect(getCurrentTime()).toMatchInlineSnapshot('"18:30"')

    //restore the time mocking 
    vi.useRealTimers()

})
