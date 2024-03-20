Feature: Add a new skill
    
    @run
    Scenario: As an Admin, I want to add new skill
      Given I am on the login screen
      When I fill the login form with valid credentials
      Then I should be able to see the home screen
      When I click on "Settings" tab in the left nav-menu
      And I click on "Manage skills" button
      And I click on "Add another skill" button
      And I type "Test Skill" on Skill field
      And I click on Add button on Skill popup
      Then I should see success message on the Add Skill Page

      
