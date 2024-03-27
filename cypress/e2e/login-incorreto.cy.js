describe('Página de login', () => {
    it('Verificar mensagem de campos obrigatórios', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })