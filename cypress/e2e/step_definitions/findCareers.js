import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import { homePage } from '@pages/HomePage'
import { resultsPage } from '@pages/ResultsPage'
import { jobDetailsPage } from '@pages/JobDetailsPage'

Given("User is navigated to the google careers page", () => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  cy.visit("/");
});

When("User type and select folowing data", (datatable) => {
  datatable.hashes().forEach((data) => {
    for (let field in data) {
      let value = data[field]
      homePage.typeAndSelectOption(field, value)
    }
  });
});

When("Clicks on the search button", () => {
  homePage.clickSearch()
});

Then("User will be navigated to the results page", () => {
  resultsPage.verifyResultsPageUrl()
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

When("Click Sort by {string} filter", (type) => {
  resultsPage.sortItemsBy(type)
});