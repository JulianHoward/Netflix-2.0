const express = require('express');
const router = express.Router();

const db = require('../db/index.js')

router.get('/:id_temporada', async (req, res, next) => {
    try {
        let results = await db.two(req.params.id_temporada);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/', async (req, res, next) => {
    try {
        let results = await db.seven();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;