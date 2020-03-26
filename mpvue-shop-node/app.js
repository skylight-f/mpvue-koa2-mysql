const koa = require('koa')
const app = new koa()
const bodyParser = require('koa-bodyparser') 
const config =require('./config')
const router = require('./routes')

app.use(bodyParser())

app.use(router.routes())

app.listen(config.port, () => {
  console.log(`server is start at port ${config.port}`)
})