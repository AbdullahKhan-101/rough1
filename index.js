const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('hwloow')
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})