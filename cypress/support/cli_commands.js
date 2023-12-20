Cypress.Commands.add('cloneViaSSH', project => {
    const domain = Cypress.config('localhost:81')
  
    cy.exec(`cd /home/adilson/curso_cypress2/cypress/downloads/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`, { failOnNonZeroExit: false })
  })
  
//   cy.exec('cd /home/adilson/curso_cypress2/cypress/downloads/ && git clone git@localhost:81:root/project-14602fc3-3ba2-47a0-9e48-a8543508bdd9.git', { failOnNonZeroExit: false });
