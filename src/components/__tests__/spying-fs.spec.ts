import { describe, it, expect,vi } from 'vitest'

import { mount } from '@vue/test-utils'
import { readFileSync } from 'fs'
import { loadConfig } from '@/fs'
//viemock has to be at the top level to repace at run time
vi.mock('fs', async (importOriginal) => {
  //using import original it works the same as vi.importActual() but you dont have to duplicate the code ( import)
   const actual = await importOriginal() as typeof import('fs')
   return {
    ...actual,
    readFileSync(): string{
      return '{"name": "mocked name tandepo"}'
    }

   } 
})

describe('spying on the fs ', () => {
  it('',async () => {
 const result = await loadConfig()
  expect(result).toMatchInlineSnapshot(`
    {
      "name": "mocked name tandepo",
    }
  `)
 
  })

  // vitest mocking functions makes it more easier to tes t


 
})
