const express = require('express');
const router = express.Router();

const db = require('../db/index.js')

router.get('/', async (req, res, next) => {
    try {
        let results = await db.three();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/:usuario_id', async(req, res, next) =>{
    try{
        let results = await db.four(req.params.usuario_id);
        res.json(results);
    }catch{
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;