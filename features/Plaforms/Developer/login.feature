Feature: Login Page

# @run
Scenario: Login with valid credentials
Given I navigate to Developer Login Page
When I fill the login form with valid credentials for developer
Then I should see the "Dashboard" Heading

# @run
Scenario: Login with in-valid credentials
Given I navigate to Developer Login Page
When I fill the login form with in-valid credentials for developer
Then I should see the "Invalid Email Id or Password" message
