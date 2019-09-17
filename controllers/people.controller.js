//Deale with CRUD operations related to people

const express = require('express');

var router = express.Router();

                //request handler function
router.get('/', (req,res) => {
    //res.json('Sample text')
    res.render("people/addOrEdit", {
        viewTitle: "Insert people" //addOrEdit file
    });
});

module.exports = router; //exports router object