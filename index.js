const express = require('express')
const server = express()
const port = 8080
const jwt = require('jsonwebtoken')

const secret = '5RBW0rDp78c5j4BKOq8lLN0eZ27HjGip'
const issuer = 'Rmqi7mOBWHuWmIxKmynIVZU3mC5OTGQM'

server.get('/', (req, res) => {
  if (process.env.DEBUG) {
    return res.status(200).json(req.headers)
  }

  let b = null
  if (req.headers.authorization) {
    b = req.headers.authorization.split(' ')[1]
  }
  if (req.headers.cookie) {
    b = req.headers.cookie.split(';')[0].split('=')[1]
  }

  if (b) {
    jwt.verify(b, secret, { issuer }, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' })
      }

      return res.status(200).json(decoded)
    })
  } else {
    res.status(406).json({ error: 'No token' })
  }
})

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})
