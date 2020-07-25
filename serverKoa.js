// import Koa from 'koa';
// import KoaRouter from 'koa-router';
var Koa = require('Koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

const middlewareKoa = (ctx, next) => {
    console.log("LOGGER ", ctx.request.url);
    next();
};
app.use(middlewareKoa);

router.get('/usersKoa', (ctx, next) => {
    ctx.body = 'post hello koa';
});

app.use(router.routes()).use(router.allowedMethods());
 
app.listen(3001);