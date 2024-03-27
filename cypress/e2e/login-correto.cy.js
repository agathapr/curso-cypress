describe('Página de cadastro', () => {
    it('Preencher os campos do formulário corretamente para logar um usuário', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/');
      cy.get('[data-test="loginUserName"]').type('teste123');
      cy.get('[data-test="loginPassword"]').type('senhateste');
      cy.get('[data-test="loginBtn"]').click();
    })
  })