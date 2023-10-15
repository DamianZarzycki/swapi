describe('Game mode selection', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Single Player button SHOULD exist', () => {
    const singlePLayerBtn = cy.get('#single-player-button');
    singlePLayerBtn.should('exist');
  });

  it('Multiplayer button SHOULD exist and be disabled', () => {
    const multiPLayerBtn = cy.get('#multi-player-button');
    multiPLayerBtn.should('exist');
    multiPLayerBtn.should('be.disabled');
  });

  it('SHOULD navigate to a new URL WHEN Single Player button is clicked AND wait for modal with winner', () => {
    const singlePLayerBtn = cy.get('#single-player-button');
    singlePLayerBtn.click();
    cy.url().should('equal', 'http://localhost:4200/game-area');
    cy.get('#fight-button').should('exist');

    cy.get('#fight-button').should('exist');
    cy.get('#play-as-value').should('exist');
    cy.get('#play-against-value').should('exist');

    cy.wait(2000)

    cy.get('#dialog').should('exist');
  });

  it('SHOULD navigate to a new URL WHEN Single Player button is clicked AND wait for modal with winner THEN close the dialog AND change the playAgainst value AND wait for another modal', () => {
    const singlePLayerBtn = cy.get('#single-player-button');
    singlePLayerBtn.click();
    cy.url().should('equal', 'http://localhost:4200/game-area');
    cy.get('#fight-button').should('exist');

    cy.get('#fight-button').should('exist');
    cy.get('#play-as-value').should('exist');
    cy.get('#play-against-value').should('exist');

    cy.wait(2000)

    const dialog = cy.get('#dialog')
    const closeBtn = dialog.get('#close-button');
    closeBtn.click();
    cy.wait(1000)

    const playAgainstValueSelect = cy.get('#play-against-value').should('exist');
    playAgainstValueSelect.click();

    const playAgainstOpt1 = cy.get('#play-against-opt-2');
    playAgainstOpt1.click();
    cy.wait(2000)

  });


});
