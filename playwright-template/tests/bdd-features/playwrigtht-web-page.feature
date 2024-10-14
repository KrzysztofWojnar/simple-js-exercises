Feature: Playwright Home Page

    Background:
        Given Prepare the background

    Scenario Outline: Check heading - <Title>
        Given I am on Playwright home page
        When I click link "<name>"
        Then I see heading "<text>"

        Examples:
        | Title          | name          | text             |
        | Should pass 1  | Get started   | Installation     |
        | Should pass 2  | Get started   | Installation     |