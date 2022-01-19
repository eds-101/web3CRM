const { response } = require('express')
const express = require('express')
const app = express() 
const port = 3000 

const DummyData = require('./constructor/DummyData') 
// not grabbing the data

app.get('/data', async function (req, res) { 
    let newObject = await DummyData   
  res.send(newObject)
})

app.listen(port, () => console.log(`Example app is listening on port ${port}`))