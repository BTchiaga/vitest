import {setupServer} from 'msw/node'
import { rest } from 'msw'
import { beforeAll, afterAll } from 'vitest'




const server = setupServer(
    rest.get('https://jsonplaceholder.typicode.com/posts/:id',(req,res,ctx) => {
     return res(
        ctx.json({
            body:'mocked'
        })
     )
}))

beforeAll(() => server.listen())
afterAll(() => server.close() )