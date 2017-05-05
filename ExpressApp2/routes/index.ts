/*
 * GET home page.111111222
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express' });
});

router.get('/a', (req: express.Request, res: express.Response) => {
    res.send("aaaaa");
});

router.get('/1', (req: express.Request, res: express.Response) => {
    res.send("11111");
});

export default router;