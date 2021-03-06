//importaciones
import Express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";

//creacion de app
const app = Express();

//settings
app.set('port', 3000);

//path
const __dirname = dirname(fileURLToPath(import.meta.url));

//motor de plantilla 
app.set('views', join(__dirname, 'views'));
app.set('views engine', 'ejs');

//routes
app.use(indexRoutes);

//static file 
app.use(Express.static(join(__dirname, 'public')))

//escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('server en linea', app.get('port'));
});
