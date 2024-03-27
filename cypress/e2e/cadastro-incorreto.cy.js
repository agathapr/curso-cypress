describe('Página de cadastro', () => {
    it('Verificar mensagem de campos obrigatórios', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/');
      cy.contains('a', 'Register now').click();
      cy.get('[data-test="btnRegister"]').click();
      cy.get('[data-test="btnRegister"]').click();
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })