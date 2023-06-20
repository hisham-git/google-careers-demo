class JobDetailsPage {
  elements = {
    jobTitle: () => cy.get("h1.gc-job-detail__title"),
    applyBtn: () => cy.get("a.gc-button[aria-label='Apply for this job']")
  };

  verifyJobTitleIsVisible() {
    cy.log("Verifying job title is visible")
    this.elements.jobTitle()
      .should('be.visible')
  }

  verifyApplyBtnIsVisible() {
    cy.log("Verifying Apply button is visible")
    this.elements.applyBtn()
      .should('be.visible')
  }

  clickApplyButton() {
    cy.log("Clicking Apply button")
    this.elements.applyBtn().click()
  }
}

export const jobDetailsPage = new JobDetailsPage();
