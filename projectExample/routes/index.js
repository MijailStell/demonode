import Router from 'koa-router';
import fetch from 'node-fetch';
 
var rutas = new Router();
rutas.get('/home', (ctx, next) => {
  fetch('https://api.github.com/users/hadley/orgs').then(respuesta => {
    return respuesta.json();
  }).then(respuestaJson => {
    console.log(respuestaJson);
    ctx.body = respuestaJson;
  });
  //ctx.body = 'ESTOY EN EL HOME';
});
 
rutas.get('/page1', (ctx, next) => {
  //ctx.body = 'ESTOY EN EL PAGE1';
});
 
rutas.get('/page2', (ctx, next) => {
  //ctx.body = 'ESTOY EN EL PAGE2';
});
 
export default rutas;