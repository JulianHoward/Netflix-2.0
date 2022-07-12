const express = require('express');
const mysql = require('mysql');

const apiRouter = require('./rutas/index.js');
const apiRouter2 = require('./rutas/index-temporadas');
const apiRouter3 = require('./rutas/index-usuarios');
const apiRouter4 = require('./rutas/index-episodios');

const app = express();


app.use('/api/chirps', apiRouter);
app.use('/api/temporadas', apiRouter2);
app.use('/api/users', apiRouter3);
app.use('/api/episodios', apiRouter4);

const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));


const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'root',
    user: 'root',
    database: 'playit',
    host: 'localhost',
    port: '3306'
});

app.post('/ingresar-user', (req, res) => {
    console.log(req.body);
    const { usuario_id, nombre_completo, username, password, tipo_usuario} = req.body;
    try {
        pool.query(`INSERT INTO usuarios VALUES(${usuario_id}, '${nombre_completo}', '${username}', '${password}', ${tipo_usuario});`);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/ingresar-serie', (req,res) =>{
    console.log(req.body);
    const { serie_id, nombre_serie, descripcion } = req.body;
    try{
        pool.query(`INSERT INTO series VALUES(${serie_id}, '${nombre_serie}', '${descripcion}');`);
    }catch (error){
        console.log(error);
        res.sendStatus(500);  
    }
});

app.post('/ingresar-temporada', (req,res) =>{
    console.log(req.body);
    const { temporada_id, nombre_temporada, orden, serie_foranea } = req.body;
    try{
        pool.query(`INSERT INTO temporadas VALUES(${temporada_id}, '${nombre_temporada}', ${orden}, ${serie_foranea});`);
    }catch (error){
        console.log(error);
        res.sendStatus(500);  
    }
});

app.post('/ingresar-episodio', (req,res) =>{
    console.log(req.body);
    const { episodio_id, titulo, descripcion, youtube_video_id, orden, temporada_foranea } = req.body;
    try{
        pool.query(`INSERT INTO episodios VALUES(${episodio_id}, '${titulo}', '${descripcion}', '${youtube_video_id}', ${orden}, ${temporada_foranea});`);
    }catch (error){
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT} || '3001'`);

});

const cors = require('cors');
app.use(cors());