const express = require('express');
const app  = express();

app.get('/', (req,res)=>{
    res.status(200).json({"msg" : "Second app"})
})


app.listen(7001, ()=> {console.log(`server started on 7001`);})