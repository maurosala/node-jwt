const jwt = require('jsonwebtoken')
const axios = require('axios')

const secret = '5RBW0rDp78c5j4BKOq8lLN0eZ27HjGip'
const issuer = 'Rmqi7mOBWHuWmIxKmynIVZU3mC5OTGQM'

axios.defaults.withCredentials = true

const main = async () => {
  const t = jwt.sign(
    {
      payload: { id: 'mauro', email: 'mauro.sala@krateo.io', company: 'krateo' }
    },
    secret,
    {
      issuer,
      expiresIn: 60 * 1,
      subject: 'krateo',
      audience: 'krateo'
    }
  )

  // const t =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1hdXJvIn0.eyJwYXlsb2FkIjp7ImlkIjoibWF1cm8iLCJlbWFpbCI6Im1hdXJvLnNhbGFAa3JhdGVvLmlvIiwiY29tcGFueSI6ImtyYXRlbyJ9LCJpYXQiOjE2NTkwMTcxNDQsImV4cCI6MTY1OTAxNzIwNCwiYXVkIjoia3JhdGVvIiwiaXNzIjoiUm1xaTdtT0JXSHVXbUl4S215bklWWlUzbUM1T1RHUU0iLCJzdWIiOiJtYXVybyJ9.LvYVF6wjLhPVDEkpb0YccoP6tHQ87L6NvfV05T-dAk0'
  console.log(t)

  const api = 'https://hello.krateo.site/'
  axios
    .get(api, {
      headers: {
        // Cookie: `krateo=${t}`
        // Authorization: `Bearer ${t}`
      }
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response.data, err.response.status)
    })
}

main()
