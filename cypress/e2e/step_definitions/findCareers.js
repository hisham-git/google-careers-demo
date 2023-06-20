import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import { homePage } from '@pages/HomePage'
import { resultsPage } from '@pages/ResultsPage'
import { jobDetailsPage } from '@pages/JobDetailsPage'

Given("A web browser is at the google careers page", () => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  cy.visit("/");
});

When("A user enters the role: {string}", (role) => {
  homePage.typeAndSelectRole(role)
});

When("A user enters the location: {string}", (loc) => {
  homePage.typeAndSelectLocation(loc)
});

When("Clicks on the search button", () => {
  homePage.clickSearch()
});

Then("User will be navigated to the results page", () => {
  resultsPage.verifyResultsPageUrl
});

Then("Verify results page has items", () => {
  resultsPage.verifySearchResultContainsItems()
});

When("Click first item from results", () => {
  resultsPage.clickFirstItemFromResult()
});

Then("Verify details page is visible", () => {
  jobDetailsPage.verifyJobTitleIsVisible()
  jobDetailsPage.verifyApplyBtnIsVisible()
})