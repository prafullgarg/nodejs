const express = require('express');
const app = express();

app.use("/", (req,res,next) => {
    console.log("this always runs")
    next();
});

app.use("/middle",(req,res,next) => {
    res.send("in the middleware");
});

app.use("/", ((req,res,next)=> {
    console.log("in another middleware")
    res.send('<h1>Hello From Express!!!</h1>')
}));




app.listen(3000);