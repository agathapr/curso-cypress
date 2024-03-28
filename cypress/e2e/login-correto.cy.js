describe('Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
  })

  it('Preencher os campos do formulário corretamente para logar um usuário', () => {
      cy.login('teste12', 'senhateste')
  })
})