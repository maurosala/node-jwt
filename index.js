const express = require('express')
const server = express()
const port = 3000

server.get('/', (req, res) => {
  console.log(req.headers)
  res.status(200).json(req.headers)
})

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})
