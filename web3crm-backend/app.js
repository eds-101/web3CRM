const { response } = require('express')
const express = require('express')
const PersonalData = require('./constructor/HoldingPersonalData')  
const app = express() 
const port = 3000 

const persoanldata = new PersonalData

 app.get('/data', async function (req, res) {  
  let newObject = await persoanldata.StoredData()   
  res.send(newObject)
})

app.listen(port, () => console.log(`Example app is listening on port ${port}`))