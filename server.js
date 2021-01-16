const express = require('express');
const json = require('./designers.json')
const port = process.env.PORT||5000;
const app = express()

app.get('/api/designers',(req,res)=>{
    res.json(json);
})
app.get('/api/designers/:id',(req,res)=>{
    const id = req.params.id-1;
    res.json(json[id]);
})

app.listen(port,()=>{
    console.log(`Server started at ${port}`);    
})