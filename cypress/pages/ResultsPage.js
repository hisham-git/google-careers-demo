class ResultsPage {
  elements = {
    cards: () => cy.get(".gc-card__container"),
    expandButton: () => cy.get("#search-results li a.gc-button"),
    optionsList: () => cy.get("ul[role='listbox']"),
    sortButton: () => cy.get("div.gc-sort-options__select").eq(1)
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

  sortItemsBy(type) {
    cy.log("Sorting Items by: " + type)
    this.elements.sortButton().click()
    this.elements.optionsList().should('be.visible')
    cy.contains('li', type).click()
  }
}

export const resultsPage = new ResultsPage();
