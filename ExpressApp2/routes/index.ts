/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express' });
});

router.get('/a', (req: express.Request, res: express.Response) => {
    res.send("aaaaa");
});

export default router;