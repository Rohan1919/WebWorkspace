const fs=require('fs');//filesystem

fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err)
        throw err;
    else
        console.log(data);     
})