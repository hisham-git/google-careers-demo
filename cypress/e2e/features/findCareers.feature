Feature: Careers page search functionality

    Background:
        Given A web browser is at the google careers page

    Scenario: Searching with specific Role and Place
        When A user enters the role: "Software Engineer"
        When A user enters the location: "Dublin"
        And Clicks on the search button
        Then User will be navigated to the results page
        And Verify results page has items

        When Click first item from results
        Then Verify details page is visible