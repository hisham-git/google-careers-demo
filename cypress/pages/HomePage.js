class HomePage {
  elements = {
    roleInput: () => cy.get("#inline-search-input-query"),
    locationInput: () => cy.get("#inline-search-input-location"),
    searchBtn: () => cy.get("button[type='submit']"),
    autocomplete: () => cy.get("ul[role='listbox']")
  };

  typeAndSelectRole(role) {
    this.elements.roleInput().type(role)
    this.elements.autocomplete().should('be.visible').scrollIntoView()
    cy.contains('li', role).click()    
  }

  typeAndSelectLocation(location) {
    this.elements.locationInput().type(location)
    this.elements.autocomplete().should('be.visible').scrollIntoView()
    cy.contains('li', location).click()
  }

  clickSearch() {
    this.elements.searchBtn().scrollIntoView().click({ force: true })
  }
}

export const homePage = new HomePage();
