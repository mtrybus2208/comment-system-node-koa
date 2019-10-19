const Koa = require('koa');
const json = require('koa-json');
const Router = require('koa-router');
const path = require('path');
var bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router();

console.log(__dirname);
console.log(path.join(__dirname, 'views', 'asd'));

router
  .get('/', (ctx, next) => {
    ctx.body = {msg: 'HOME - to bedzie wsiokutas'};
  })
  .get('/admin', (ctx, next) => {
    ctx.body = {msg: 'ADMIN - to bedzie wsiokutas'};
  })
  .post('/users', (ctx, next) => {
    // ...
  })
  .put('/users/:id', (ctx, next) => {
    // ...
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })
  .all('/users/:id', (ctx, next) => {
    // ...
  });

 

app
  .use(bodyParser())
  .use(json())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(9000, () => console.log('Server saatarted'));