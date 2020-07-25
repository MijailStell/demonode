// import Koa from 'Koa';
// import router from 'koa-router';
var Koa = require('Koa');
var Router = require('koa-router')

var app = new Koa();
var router = new Router();

router.get('/usersKoa', (ctx, next) => {
    ctx.body = 'post hello koa';
});

app.use(router.routes()).use(router.allowedMethods());
 
app.listen(3001);