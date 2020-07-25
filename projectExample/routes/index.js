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
rutas.get('/home', (ctx, next) => {
  axios.interceptors.response.use(function(response){
    console.log("Interceptor del response", response);

    return parseBody(response.data);
  }, function(error){
    return Promise.reject(error);
  });

  axios.get('https://api.github.com/users/hadley/orgs', {
    headers: {
      'Content-type': 'application/json'
    }
  }).then(respuesta => {
    console.log("Respuesta con axios: ", respuesta);
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