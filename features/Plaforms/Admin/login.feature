Feature: Login Page

# @run
Scenario: Login with valid credentials
Given I am on the login screen
When I fill the login form with valid credentials
Then I should be able to see the home screen

# @run
Scenario: Login with in-valid credentials
Given I am on the login screen
When I fill the login form with in-valid credentials
Then I should see the "Invalid Email Id or Password" message
