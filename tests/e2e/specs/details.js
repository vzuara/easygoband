describe('Details View', () => {
  it('all items should be visible', () => {
    cy.visit('/1');

    cy.get('.logo', { timeout: 10000, includeShadowDom: true }).should(
      'be.visible'
    );

    cy.get('div.v-card').should('be.visible');
    cy.get('div.v-toolbar__title').should('contain', 'Buzz');
    cy.get('[name="fermentation"]').should('contain', '19');
    cy.get('[name="tips"]').should(
      'contain',
      'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.'
    );
    cy.get('[name="tagline"]').should('contain', 'A Real Bitter Experience.');
    cy.get('[name="contributedBy"]').should(
      'contain',
      'Sam Mason <samjbmason>'
    );
    cy.get('[name="descriptionCard"]').should(
      'contain',
      'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.'
    );
    cy.get('[name="mashTempCard"] p.mb-0')
      .first()
      .should('contain', 'Temp: 64');
    cy.get('[name="foodCard"] p.mb-0')
      .first()
      .should('contain', 'Spicy chicken tikka masala');
    cy.get('[name="firstBrewed"]').should('contain', '09/2007');
    cy.get('[name="volume"]').should('contain', '20 litres');
    cy.get('[name="boilVolume"]').should('contain', '25 litres');
    cy.get('[name="abv"]').should('contain', '4.5');
    cy.get('[name="ibu"]').should('contain', '60');
    cy.get('[name="targetFg"]').should('contain', '1010');
    cy.get('[name="targetOg"]').should('contain', '1044');
    cy.get('[name="ebc"]').should('contain', '20');
    cy.get('[name="srm"]').should('contain', '10');
    cy.get('[name="ph"]').should('contain', '4.4');
    cy.get('[name="attenuation"]').should('contain', '75');

    cy.get('[name="ingredients"] p.mb-0')
      .first()
      .should('contain', 'Maris Otter Extra Pale');
  });

  it('should show list', () => {
    cy.get('#backBtn').click();
    cy.location('href').should('include', '/');
  });
});
