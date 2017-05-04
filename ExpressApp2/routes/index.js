"use strict";
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});
router.get('/a', function (req, res) {
    res.send("aaaaa");
});
router.get('/1', function (req, res) {
    res.send("11111");
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map