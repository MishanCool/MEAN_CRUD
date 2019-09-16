//Deale with CRUD operations related to people

const express = require('express');

var router = express.Router();

router.get('/', (req,res) => {
    res.json('Sample text')
});

module.exports = router; //exports router object