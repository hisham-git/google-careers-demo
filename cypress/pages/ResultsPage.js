class ResultsPage {
  elements = {
    cards: () => cy.get(".gc-card__container"),
    expandButton: () => cy.get("#search-results li a.gc-button")
  };

  verifyResultsPageUrl(){
    cy.url().should("contains", "/jobs/results");
  }

  verifySearchResultContainsItems() {
    cy.log("Verifying search has items")
    this.elements.cards().its('length')
      .should('be.greaterThan', 0)
  }

  clickFirstItemFromResult() {
    cy.log("Clicking first item")
    this.elements.cards().first().find('a.gc-button').click()
  }
}

export const resultsPage = new ResultsPage();
