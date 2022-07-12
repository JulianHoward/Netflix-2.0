const mysql = require('mysql');
const { resolve } = require('path');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'root',
    user: 'root',
    database: 'playit',
    host: 'localhost',
    port: '3306'
});

let chirpdb = {};

// TRAE TODO DE SERIES
chirpdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM series', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);

        });
    })
};

// TRAE UNA SERIE POR SU ID
chirpdb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM series WHERE serie_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    })
};

// TRAE UNA TEMPORADA RELACIONADA CON LA LLAVE FORANEA DE SERIES
chirpdb.two = (id_temporada) =>{
    return new Promise((resolve, reject) =>{
       pool.query('SELECT * FROM temporadas WHERE serie_foranea = ?', [id_temporada], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
       }); 
    })
};

// TRAE TODOS LOS USUARIOS
chirpdb.three = () =>{
    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM usuarios', (err, results) =>{
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    })
};

// TRAE UN USUARIO POR SU ID 
chirpdb.four = (usuario_id) =>{
    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM usuarios WHERE usuario_id = ?', [usuario_id], (err, results) =>{
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    })
};

// TRAE UN EPISODIO RELACIONADO A LA LLAVE FORANEA DE TEMPORADA 
chirpdb.five = (episodio_id) =>{
    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM episodios WHERE temporada_foranea = ?', [episodio_id], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// TRAE TODOS LOS EPISODIOS
chirpdb.six = () =>{
    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM episodios', (err, results) =>{
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    })
};


// TRAE TODAS LAS TEMPORADAS
chirpdb.seven = () => {
    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM temporadas', (err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    })
};

module.exports = chirpdb;