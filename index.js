
const express = require('express')

const app = express()

const PORT = 3000



app.get('/', function(req, res){
  res.send('Welcome to Nose Goes')
})

app.get('/users',function(req, res){
  res.send('Here are all the nonexistent users!')
})

app.listen(PORT, function(){
  console.log('Running on Port:', PORT);
})
