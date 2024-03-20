Feature: Dashboard

#  @run
Scenario: As a developer, I should be able to request to redeem micropoints
Given I navigate to Developer Login Page
When I fill the login form with valid credentials for developer
Then I should see the "Dashboard" Heading
When I click on "Redeem" button
And I click on "3,000" button
And I click on "Request" button
Then I should see the "Redeem request sent successfully" message

#  @run
Scenario: As a developer, I should not be able to request to redeem micropoints when requests points are greater then actual points
Given I navigate to Developer Login Page
When I fill the login form with valid credentials for developer
Then I should see the "Dashboard" Heading
When I click on "Redeem" button
And I click on "10,000" button
And I click on "Request" button
Then I should see the "You don't have enough points to redeem" message

# @run
Scenario: As a developer, I should be able to see points history
Given I navigate to Developer Login Page
When I fill the login form with valid credentials for developer
Then I should see the "Dashboard" Heading
When I click on "Redeem" button
And I click on "View points history" button
Then I should see the "Points history" heading

# @run
Scenario: As a developer, I should be able to see statistics cards on my dashboard
Given I navigate to Developer Login Page
When I fill the login form with valid credentials for developer
Then I should see the "Dashboard" Heading
And I should see the "Full time" on the Developer Dashboard
And I should see the "50" on the Developer Dashboard
And I should see the "5,000" on the Developer Dashboard

# @run
Scenario: As a developer, I should be able to provide feedback
Given I navigate to Developer Login Page
When I fill the login form with valid credentials for developer
Then I should see the "Dashboard" Heading
And I click on "Give feedback" button
And I fill "This is for automation testing" in the feedback textarea
And I attach the file 
And I click on "Submit" button
Then I should see the "Feedback added successfully" message

