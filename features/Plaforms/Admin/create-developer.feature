Feature: Create Developer

  #  @run
    Scenario: As an Admin, I want to create a developer
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

Examples:
|    Name    |    LastName        |  email   |  Phone   |   Role  | Company Name  |      Project Link    |         url          |
|   Zubair   |    Automation      |  zubair+ |  1238548 |    QA   | Test Company  |https://www.google.com|https://www.google.com|