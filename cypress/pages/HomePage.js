class HomePage {
  elements = {
    searchBtn: () => cy.get("button[type='submit']"),
    optionsList: () => cy.get("ul[role='listbox']")
  };

  typeAndSelectOption(label, option) {
    cy.log("Typing and selecting option: [" + option + "] from field: [" + label + "]")
    cy.contains('label', label).next().find('input').type(option)
    this.elements.optionsList().should('be.visible').scrollIntoView()
    cy.contains('li', option).click()
  }

  clickSearch() {
    this.elements.searchBtn().scrollIntoView().click({ force: true })
  }
}

export const homePage = new HomePage();
