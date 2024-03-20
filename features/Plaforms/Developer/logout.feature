Feature: Logout

# @run
Scenario: As a developer, I should be able to logout
Given I navigate to Developer Login Page
When I fill the login form with valid credentials for developer
Then I should see the "Dashboard" Heading
When I click on arrow button in the left nav-menu
And I click on "Logout" button
Then I should see the "Login" Heading
