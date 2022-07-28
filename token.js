const jwt = require('jsonwebtoken')
const axios = require('axios')

const secret = '5RBW0rDp78c5j4BKOq8lLN0eZ27HjGip'
const issuer = 'Rmqi7mOBWHuWmIxKmynIVZU3mC5OTGQM'

axios.defaults.withCredentials = true

const main = async () => {
  // const t = jwt.sign({ id: 'mauro' }, secret, {
  //   issuer,
  //   expiresIn: '1h'
  // })
  const t =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1hdXJvIiwiaWF0IjoxNjU5MDEyMDc4LCJleHAiOjE2NTkwMTU2NzgsImlzcyI6IlJtcWk3bU9CV0h1V21JeEtteW5JVlpVM21DNU9UR1FNIn0.6EgpWIU2iKQgkNce1gpDvEXtkklvNIh-S0Gt9FnbTmI'

  console.log(t)

  const api = 'https://hello.krateo.site/'
  axios
    .get(api, {
      headers: {
        Cookie: `krateo=${t}`
        // Authorization: `Bearer ${t}`
      }
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
}

main()
