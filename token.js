var jwt = require('jsonwebtoken')

const secret = '5RBW0rDp78c5j4BKOq8lLN0eZ27HjGip'
// const secret = 'secret-hash-brown-bear-market-rate-limit'

const t = jwt.sign({ id: 'mauro' }, secret, {
  issuer: 'Rmqi7mOBWHuWmIxKmynIVZU3mC5OTGQM',
  expiresIn: '1h'
})

console.log(t)
