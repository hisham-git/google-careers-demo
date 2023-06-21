Feature: Careers page search functionality

    Background:
        Given User is navigated to the google careers page
        When User type and select folowing data
            | Role              | Where? |
            | Software Engineer | Dublin |
        And Clicks on the search button
        Then User will be navigated to the results page

    Scenario: User can search with specific Role and Place
        And Verify results page has items
        When Click first item from results
        Then Verify details page is visible

    Scenario: User can sort results by date
        And Verify results page has items
        When Click Sort by 'Date' filter
        And Verify results page has items
