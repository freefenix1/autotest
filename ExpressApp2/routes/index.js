"use strict";
/*
 * GET home page.111111222
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});
router.get('/a', function (req, res) {
    res.send("a1344445");
});
router.get('/1', function (req, res) {
    res.send("b1233");
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map