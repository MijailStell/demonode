import rutas from './routes';
import Koa  from 'koa';
 
var app = new Koa();
 
app.use(rutas.routes())
app.listen(3000)