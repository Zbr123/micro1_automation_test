Feature: Logout

# @run
Scenario: As a client, I should be able to log out
Given I navigate to Client Login Page
When I fill the login form with valid credentials for client
Then I should see the "Dashboard" Heading
When I click on arrow button in the left nav-menu
And I click on "Logout" button
Then I should see the "Login" Heading
