Feature: Logout

# @run
Scenario: As an admin, I should be able to log out
Given I am on the login screen
When I fill the login form with valid credentials
Then I should be able to see the home screen
When I click on arrow button in the left nav-menu
And I click on "Logout" button
Then I should see the "Login" Heading

