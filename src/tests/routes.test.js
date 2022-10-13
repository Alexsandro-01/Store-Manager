const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app');

describe('Teste de exemplo', () => {
  it('Retorna a mensagem correta', async () => {
    const response = await chai.request(app).get('/');

    const body = response.body;
    chai.expect(body).to.deep.equal({ message: 'Roses are red, violets are blue, unexpected "}" om line 32' })
  })
})