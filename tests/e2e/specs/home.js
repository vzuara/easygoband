describe('Home View', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('all items should be visible', () => {
    cy.get('.logo').should('be.visible');
    cy.get('div.v-card').should('be.visible');
    cy.get('div.v-toolbar__title').should('contain', 'Beers List');
    cy.get('#filters').should('contain', 'Filters');
    cy.get('thead').find('th').should('have.length', 8);
    cy.get('tbody').find('tr').should('have.length', 10);
    cy.get('#low').should('be.visible');
    cy.get('#med').should('be.visible');
    cy.get('#high').should('be.visible');
  });

  it('should show dialog filter', () => {
    cy.get('#filters').click();
    cy.get('div.v-dialog__content').should('be.visible');
  });

  it('should filters work', () => {
    cy.get('#filters').click();
    cy.get('#name').type('buzz');
    cy.get('#searchBtn').click();
    cy.get('div.v-dialog__content').should('be.not.visible');
    cy.get('tbody').find('tr').should('have.length', 1);
  });

  it('should close dialog filter on cancel action', () => {
    cy.get('#filters').click();
    cy.get('#cancelBtn').click();
    cy.get('div.v-dialog__content').should('be.not.visible');
  });

  it('should paginate works', () => {
    const elementOne = cy.get('tbody').find('td').first();
    cy.get('[aria-label="Next page"]').click();

    const elementTwo = cy.get('tbody').find('td').first();

    expect(elementOne).to.not.equal(elementTwo);
  });

  it('should show details', () => {
    cy.get('tbody button').first().click();
    cy.location('href').should('include', '/1');
  });
});
