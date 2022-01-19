const express = require('express')
const app = express() 
const port = 3000

app.get('/data', function (req, res) { 
    let newObject = [{'id': '1', 'message': 'Hello World'}, {'id': '2', 'message': 'Weather in progress'}] 
  res.send(newObject)
})

app.listen(port, () => console.log(`Example app is listening on port ${port}`))