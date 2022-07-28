const jwt = require('jsonwebtoken')
const axios = require('axios')

const secret = '5RBW0rDp78c5j4BKOq8lLN0eZ27HjGip'
const issuer = 'Rmqi7mOBWHuWmIxKmynIVZU3mC5OTGQM'

const main = async () => {
  const t = jwt.sign({ id: 'mauro' }, secret, {
    issuer,
    expiresIn: '1h'
  })

  console.log(t)

  const api = 'https://hello.krateo.site/'
  axios
    .get(api, {
      headers: {
        Authorization: `Bearer ${t}`
      }
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

main()
