const express = require('express');
const router = express.Router();

const db = require('../db/index.js');

router.get('/:episodio_id', async (req, res, next) => {
    try {
        let results = await db.five(req.params.episodio_id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/', async (req, res, next) => {
    try {
        let results = await db.six();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;