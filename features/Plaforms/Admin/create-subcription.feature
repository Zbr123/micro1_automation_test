Feature: Create Subscription
  # @run
  Scenario: As an Admin, I want to create a Subscription
    Given I am on the login screen
    When I fill the login form with valid credentials
    Then I should be able to see the home screen
    When I click on "Engineers" tab in the left nav-menu
    And I click on "Add an engineer" button
    And I fill "First Name" with "<Name>" on Developer creation page
    And I fill "Last Name" with "<LastName>" on Developer creation page
    And I fill "Email" with "<email>" on Developer creation page
    And I fill "Phone No" with "<Phone>" on Developer creation page
    And I fill "Developer Role" with "<Role>" on Developer creation page
    And I select "India" from the Country dropdown options on developer creation page
    And I fill "About" text area with "Test" on "Developer creation" page
    And I fill "GPT-URL" with "<url>" on Developer creation page
    And I click on "Next" button
    And I selected "3dcart" in "Vetted Technical" Skills on developer creation page
    And I select "Mid-Level" in Vetted Technical Result on developer creation page
    And I fill "No of Experience" with "5" on Developer creation page
    And I press Enter Key
    And I fill "Technical Interview" Notes with "Test" on developer creation page
    And I selected "3dcart" in "Other Technical" Skills on developer creation page
    And I click on Tick button of Othoer Technical Skills on developer creation page
    And I fill "Soft Skill" Notes with "Test" on developer creation page
    And I select "Good" in Soft Skill dropdown on developer creation page
    And I select "appypie" in verified AI tools on developer creation page
    And I click on "Next" button
    And I fill "Company Name" with "<Company Name>" on Developer creation page
    And I fill "Role" with "QA" on Developer creation page
    And I type "Selenium" in Tech Stack field of developer creation page
    And I type "2016-09-05" in "Start Date" of Experience on developer creation page
    And I type "2028-09-05" in "End Date" of Experience on developer creation page
    And I fill "Responsibilties" Notes with "Test" on developer creation page
    And I click on "Add" button
    And I click on "Next" button
    And I fill "Project Name" with "Test Project" on Developer creation page
    And I fill "Project Link" with "<Project Link>" on Developer creation page
    And I fill "About Project" text area with "Test" on "Developer creation" page
    And I type "Cypress" in Tech Stack field of developer creation page
    And I click on "Add" button
    And I click on "Next" button
    And I fill "Degree Name" with "Test Degree" on Developer creation page
    And I fill "University Name" with "Test University" on Developer creation page
    And I type "2016-09-05" in "Start Date" of Experience on developer creation page
    And I type "2028-09-05" in "End Date" of Experience on developer creation page
    And I click on "Add" button
    And I click on "Next" button
    And I click on "Available Full Time" radio button on developer creation page
    And I fill "For us" with "15" on Developer creation page
    And I fill "For Client" with "20" on Developer creation page
    And I attach the certificate of the developer
    And I click on "Create" button
    Then I should see the "Engineer Profile created Successfully" message
    When I click on "Clients" tab in the left nav-menu
    And I click on "Add a Client" button
    And I upload Client Profile Picture
    And I fill "Company Name" with "<Company Name>" on Client creation page
    And I fill "Client Name" with "<Client Name>" on Client creation page
    And I fill "Email" with "<client email>" on Client creation page
    And I select "Afghanistan" from the Country dropdown options on client creation page
    And I click on "Create" button
    And I click on "Client" link
    And I click on 3 dots of recently created Client
    And I click on "View details" button
    And I click on Add engineer button
    And I click on recently added developer
    And I click on "Recommend" button
    And I click on "Add new subscription" button
    And I click on "micro1 engr subscription" button
    And I click on Select Engineer option
    And I select the recently added engineer
    And I select "Full-time" radio button on Add subscription popup
    And I fill "45" as Monthly cost of developer
    And I type "2024-11-09" in subscription date
    And I type "40" in weekly limit of subscription
    And I click on Add button on the modal
    Then I should see the "Client subscription added successfully" message

    Examples:
      | Name   | LastName   | email   | Phone   | Role | Company Name | Project Link           | Company Name | Client Name | client email | url                    |
      | Zubair | Automation | zubair+ | 1238548 | QA   | Test Company | https://www.google.com | Zubair ORG   | Zubair Alam | zubair+      | https://www.google.com |