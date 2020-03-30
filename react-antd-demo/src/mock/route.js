const express = require('express');
const router = express.Router();

router.get('/api/list', (req, res) => {
    res.send([{ name: 'aaa', age: '111', }, { name: 'bbb', age: '222' }]);
});

module.exports=router;