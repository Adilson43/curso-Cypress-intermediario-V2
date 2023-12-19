import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.gui_createProject(project)

    cy.url().should('be.equal', `http://localhost:81/${Cypress.env('user_name')}/${project.name}`)
    .then((url) => {
      cy.log('URL atual:', url);
    });
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})
