const koa = require('koa')
const config =require('./config')
const app = new koa()
const router = require('./routes')



app.use(router.routes())

app.listen(config.port, () => {
  console.log(`server is start at port ${config.port}`)
})