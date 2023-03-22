import { vi, test, expect } from 'vitest'
import { deepMerge, greetings } from '@/index'

test('shallow merge', () => {
  const merged = deepMerge({ name: 'Brice' }, { github: 'btchiaga' })

  expect(merged).toEqual({ name: 'Brice', github: 'btchiaga' })
})
test('shallow merge with overlaps', () => {
  const merged = deepMerge(
    { name: 'Brice', github: 'unknown' },
    { github: 'btchiaga', instagram: 'ZAB' }
  )

  expect(merged).toEqual({ name: 'Brice', github: 'btchiaga', instagram: 'ZAB' })
})

test('shallow merge with arrays', () => {
  const merged = deepMerge(['Brice', 'unknown'], ['btchiaga', 'ZAB'])

  expect(merged).toEqual(['Brice', 'unknown', 'btchiaga', 'ZAB'])
})

test('deep merge with overlaps', () => {
  const merged = deepMerge(
    { name: 'Brice', accounts: { github: 'unknown' },languages:['french','python','typescript'] },
    { twitter: 'YAT', accounts: { instagram: 'ZAB' },languages:['german','java'] }
  )

  expect(merged).toMatchSnapshot()
  //in dev mode to see the resultsuse inline smapshot 
  //you can use inline snapshot as a console log in test
  expect(merged).toMatchInlineSnapshot(`
    {
      "accounts": {
        "github": "unknown",
        "instagram": "ZAB",
      },
      "languages": [
        "french",
        "python",
        "typescript",
        "german",
        "java",
      ],
      "name": "Brice",
      "twitter": "YAT",
    }
  `)
})

//snapshot allows us to reuse the results from the previous test and ensure it does not get changed later  

// snapshots saves us time from wrtiing the expected results manually

test('throws erros on mergingtwo different data types', () => {
    //to capture the thrown error make the expect input as a function
  const merged = ()=> deepMerge(
    ['foo','bar'] ,
    { foo: 'bar', john: 'doe' } 
  )

  expect(merged).toThrowError('Cannot merge two different data types')
})

test('greets the user when name provided', () => {
    
  expect(greetings('Yarus')).toMatchInlineSnapshot('"Hello Yarus"')
})

// test spying on functions

test('spying on console log',() => {
    const spy = vi.spyOn(console,'log')
    greetings('Danick')
    expect(spy).toBeCalledWith('Hello Danick')
    expect(spy).toHaveBeenCalledTimes(1)

})