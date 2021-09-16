import Application from "koa"

const server = new Application()

server.use(async ctx=>{
    console.log(ctx)
})

server.listen(3000)