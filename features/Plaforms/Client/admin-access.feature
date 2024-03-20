Feature: Admin Access

# @run
Scenario: As a client, I should be able to give admin access 
Given I navigate to Client Login Page
When I fill the login form with valid credentials for client
Then I should see the "Dashboard" Heading
When I click on "Admin access" button
And I click on "Add a new admin" button
And I fill "Name" with "Zubair" on Admin access page
And I fill "Email" with "zubair+" on Admin access page
And I click on Add button on Admin access page
Then I should see "Awesome" button

# @run
Scenario: As a client, I should be able to give admin access and delete that admin
Given I navigate to Client Login Page
When I fill the login form with valid credentials for client
Then I should see the "Dashboard" Heading
When I click on "Admin access" button
And I click on "Add a new admin" button
And I fill "Name" with "Zubair" on Admin access page
And I fill "Email" with "zubair+" on Admin access page
And I click on Add button on Admin access page
Then I should see "Awesome" button
When I click on "Awesome" button
And I click on remove button of recently added Admin
And I click on "Yes, remove" button
Then I should see the "Member deleted successfully" message

# @run
Scenario: As a client, I should be able to resend the invite to any admin
Given I navigate to Client Login Page
When I fill the login form with valid credentials for client
Then I should see the "Dashboard" Heading
When I click on "Admin access" button
And I click on resend invite button of admin named "Zubair"
Then I should see the "Invite sent successfully" message
