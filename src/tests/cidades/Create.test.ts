import { testServer } from '../jest.setup';


describe('Cidades - Create', () =>{
    
  it('Cria Registro', async ()=>{

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const rest = await testServer
      .post('/cidades')
      .send({nome: 'Itaquaquecetuba'}); 

        
    expect('').toEqual('');

  });
});