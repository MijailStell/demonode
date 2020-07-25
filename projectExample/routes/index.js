import Router from 'koa-router';
import fetch from 'node-fetch';
import axios from 'axios';
 
var rutas = new Router();

function parseBody(data){
  return {
    success: true,
    message: "respuesta exitosa",
    data
  };
}

axios.interceptors.response.use(function(config){
  console.log("Interceptor del response", config);
  const token = "pruebaToken";
  config.headers = {
    'Content-type': 'application/json',
    // 'Autorization': `Bearer ${token}`
  };

  return parseBody(config.data);
}, function(error){
  return Promise.reject(error);
});

rutas.get('/home', (ctx, next) => {
  axios.get('https://api.github.com/users/hadley/orgs').then(respuesta => {
    console.log("Respuesta con axios: ", respuesta);
  });
  //ctx.body = 'ESTOY EN EL HOME';
});
 
rutas.get('/page1', (ctx, next) => {
  axios.get('https://api.github.com/users/hadley/repos').then(respuesta => {
    console.log("Respuesta con axios: ", respuesta);
  });
});
 
rutas.get('/page2', (ctx, next) => {
  //ctx.body = 'ESTOY EN EL PAGE2';
});
 
export default rutas;