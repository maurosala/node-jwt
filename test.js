const supertest = require('supertest')

var server = supertest.agent('http://localhost:8080')

describe('/', () => {
  it('should return the headers', () => {
    return server.get('/').expect(200)
  }).timeout(5000)
})
