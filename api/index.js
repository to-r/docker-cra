const express = require('express')
const app = express()

app.get('/api/users', function (req, res) {
  res.json([{
    id: 1, name: "maeda"
  }, {
    id: 2, name: "takada"
  }])
})

app.listen(9999)