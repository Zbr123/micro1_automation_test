Feature: Create Client

      # @run
    Scenario: As an Admin, I want to create a client
      Given I am on the login screen
      When I fill the login form with valid credentials
      Then I should be able to see the home screen
      When I click on "Clients" tab in the left nav-menu
      And I click on "Add a Client" button
      And I fill "Company Name" with "<Company Name>" on Client creation page
      And I fill "Client Name" with "<Client Name>" on Client creation page
      And I fill "Email" with "<email>" on Client creation page
      And I select "Afghanistan" from the Country dropdown options on client creation page
      And I click on "Create" button
      And I click on "Clients" link
      Then I should see recently added client in the client list
      
    Examples:
    |    Company Name    |    Client Name   |  email   |  
    |     Zubair ORG     |   Zubair Alam    |  zubair+ |
