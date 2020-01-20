const express = require('express');
const router = express.Router();


router.get('/petForm' , (req,res) =>{
    console.log("Hello");
    res.render("petForm")
})
router.post('/petsInfo' , (req, res) =>{
   console.log(req.body);
    // res.render("index")
})
router.get('/' , (req,res) =>{
    console.log(req.body);
   //res.render('index');
});

module.exports = router;