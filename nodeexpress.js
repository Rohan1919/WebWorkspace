const express=require("express");
const app=express();
app.get('/hello',function(req,res){//'/hello'
    res.send("hello welcome to Rohan's Empire");
})
app.listen(3000);
