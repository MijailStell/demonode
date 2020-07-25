import Router from 'koa-router';
 
var rutas = new Router();
rutas.get('/home', (ctx, next) => {
  ctx.body = 'ESTOY EN EL HOME';
});
 
rutas.get('/page1', (ctx, next) => {
  ctx.body = 'ESTOY EN EL PAGEx';
});
 
rutas.get('/page2', (ctx, next) => {
  ctx.body = 'ESTOY EN EL PAGE2';
});
 
export default rutas;