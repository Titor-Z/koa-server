import Application from "koa"

const server = new Application()

server.use(async (ctx) => {
  ctx.body = "123213123213"
  console.log(ctx.body)
})

server.listen(3000, () => {
  console.log("server is running...")
})
