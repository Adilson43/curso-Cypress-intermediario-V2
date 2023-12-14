describe('Logout', () => {
    beforeEach(() => {
      cy.login()
      cy.visit('http://localhost:81/')
    })
  
    it('successfully', () => {
      cy.logout()
  
      cy.url().should('be.equal', 'http://localhost:81/users/sign_in')
    })
  })
  