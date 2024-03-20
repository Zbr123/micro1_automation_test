Feature: Create Team Member

  # @run
  Scenario: As an Admin, I want to create a team member
    Given I am on the login screen
    When I fill the login form with valid credentials
    Then I should be able to see the home screen
    When I click on "Settings" tab in the left nav-menu
    And I click on "Add a new team member" button
    And I fill "First Name" with "Zubair" on Team member creation page
    And I fill "Last Name" with "Alam" on Team member creation page
    And I fill "Email" with "zubair+" on Team member creation page
    And I fill "Phone No" with "85823891" on Team member creation page
    And I click on "Add" button
    Then I should see success message on the Team Member Page

  # @run
  Scenario: As an admin I want to remove a team member
    Given I am on the login screen
    When I fill the login form with valid credentials
    Then I should be able to see the home screen
    When I click on "Settings" tab in the left nav-menu
    And I click on "Add a new team member" button
    And I fill "First Name" with "Zubair" on Team member creation page
    And I fill "Last Name" with "Alam" on Team member creation page
    And I fill "Email" with "zubair+" on Team member creation page
    And I fill "Phone No" with "85823891" on Team member creation page
    And I click on "Add" button
    Then I should see success message on the Team Member Page
    When I click on "Settings" tab in the left nav-menu
    And I search team member in the Search Field
    And I click on team member on the Settings page
    And I click on "Yes, remove" button
    Then I should see delete successfully message on Team Member Page


