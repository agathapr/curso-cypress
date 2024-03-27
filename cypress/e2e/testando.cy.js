describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/');
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('teste@teste.com');
    cy.get('[data-test="fullName"]').type('Teste');
    cy.get('[data-test="registerUserName"]').type('teste12');
    cy.get('[data-test="registerPassword"]').type('senhateste');
    cy.get('[data-test="btnRegister"]').click();
  })
})