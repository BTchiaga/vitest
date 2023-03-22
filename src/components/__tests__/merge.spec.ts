import { it, test, expect } from 'vitest'
import { deepMerge } from '@/index'

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
    { name: 'Brice', accounts: { github: 'unknown' } },
    { twitter: 'YAT', accounts: { instagram: 'ZAB' } }
  )

  expect(merged).toEqual({ name: 'Brice',twitter: 'YAT', accounts: { github: 'unknown', instagram: 'ZAB' }})
})

test('throws erros on mergingtwo different data types', () => {
    //to capture the thrown error make the expect input as a function
  const merged = ()=> deepMerge(
    ['foo','bar'] ,
    { foo: 'bar', john: 'doe' } 
  )

  expect(merged).toThrowError('Cannot merge two different data types')
})
