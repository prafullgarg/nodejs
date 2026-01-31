const express = require('express');
const path = require('path')
const router = express.Router();

// route is /admin/add-product
router.get("/add-product",(req,res,next) => {
    res.status(200).sendFile(path.join(__dirname,"..","views","add-product.html"));
});


// route is /admin/product
router.post("/product",(req,res,next) => {
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;