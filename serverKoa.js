import Koa from 'koa';
import Router from 'koa-router';

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