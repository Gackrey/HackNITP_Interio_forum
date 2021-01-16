const express = require('express');
const designers = require('./json/designers.json')
const bedroom = require('./json/bedroom.json')
const livingroom = require('./json/livingroom.json')
const dining = require('./json/dining.json')
const port = process.env.PORT||5000;
const app = express()

app.get('/api/designers',(req,res)=>{
    res.json(designers);
})

app.get('/api/designers/:id',(req,res)=>{
    const id = req.params.id-1;
    res.json(designers[id]);
})

app.get('/api/templete/livingroom',(req,res)=>{
    res.json(livingroom);
})

app.get('/api/templete/dining',(req,res)=>{
    res.json(dining);
})

app.get('/api/templete/bedroom',(req,res)=>{
    res.json(bedroom);
})

app.listen(port,()=>{
    console.log(`Server started at ${port}`);    
})