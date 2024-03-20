Feature: GPT Vetting
    
    # @run
    Scenario: I want to invite a candidate without mentioning skills 
    Given I navigate to Client Login Page
    When I fill the login form with valid credentials for client
    Then I should see the "Dashboard" Heading
    When I click on "gpt-vetting" tab in the left nav-menu
    Then I should see the "gpt-vetting" Heading
    When I click on "Invite a candidate" button
    And I fill "first" Name with "Zubair Automation" on Invite a candidate popup
    And I fill "first" email with "zubair+212@micro1.ai" on Invite a candidate popup
    And I click on "+ Add another candidate" button
    And I fill "second" Name with "Zubair Automation 2" on Invite a candidate popup
    And I fill "second" email with "zubair+213@micro1.ai" on Invite a candidate popup
    And I click on "+ Add another candidate" button
    And I fill "third" Name with "Zubair Automation 3" on Invite a candidate popup
    And I fill "third" email with "zubair+214@micro1.ai" on Invite a candidate popup
    And I click on "Send invitation" button
    Then I should see the "Candidate invited successfully" message

    # @run
    Scenario: I want to invite a candidate by mentioning skills 
    Given I navigate to Client Login Page
    When I fill the login form with valid credentials for client
    Then I should see the "Dashboard" Heading
    When I click on "gpt-vetting" tab in the left nav-menu
    Then I should see the "gpt-vetting" Heading
    When I click on "Invite a candidate" button
    And I click on "Yes, I will define the skills" radio button
    And I fill "first" skill with "Java" on Invite a candidate popup
    And I select "junior" difficulty level for "first" skill
    And I click on "+ Add another skill" button
    And I fill "second" skill with "JavaScript" on Invite a candidate popup
    And I select "mid-level" difficulty level for "second" skill
    And I fill "first" Name with "Zubair Automation" on Invite a candidate popup
    And I fill "first" email with "zubair+212@micro1.ai" on Invite a candidate popup
    And I click on "+ Add another candidate" button
    And I fill "second" Name with "Zubair Automation 2" on Invite a candidate popup
    And I fill "second" email with "zubair+213@micro1.ai" on Invite a candidate popup
    And I click on "+ Add another candidate" button
    And I fill "third" Name with "Zubair Automation 3" on Invite a candidate popup
    And I fill "third" email with "zubair+214@micro1.ai" on Invite a candidate popup
    And I click on "Send invitation" button
    Then I should see the "Candidate invited successfully" message

    # @run
    Scenario: I want to add a new test in saved test
    Given I navigate to Client Login Page
    When I fill the login form with valid credentials for client
    Then I should see the "Dashboard" Heading
    When I click on "gpt-vetting" tab in the left nav-menu
    Then I should see the "gpt-vetting" Heading
    When I click on "Manage saved tests" button
    And I click on "Add new" button
    And I fill "Demo Test 1" in the Name of test field 
    And I fill "first" Main with "Python" on Add new test popup
    And I select "beginner" difficulty level for "first" skill
    And I fill "second" Main with "NodeJs" on Add new test popup
    And I select "intermediate" difficulty level for "second" skill
    And I fill "third" Main with "JavaScript" on Add new test popup
    And I select "expert" difficulty level for "third" skill
    And I click on "Save" button
    Then I should see the "Demo Test 1" Heading
    
   