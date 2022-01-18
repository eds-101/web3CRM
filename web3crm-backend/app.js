const express = require('express')
const app = express() 
const port = 5000

app.get('/', function (req, res) { 
    let Array = {'id': '1', 'message': 'hello world'}
  res.send(Array)
})

app.listen(port, () => console.log(`Example app is listening on port ${port}`))