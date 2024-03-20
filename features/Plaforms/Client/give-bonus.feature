Feature:Given Bonus

    # @run
    Scenario: I should be able to give bonus
        Given I navigate to Client Login Page
        When I fill the login form with valid credentials for client
        Then I should see the "Dashboard" Heading
        When I click on "My Team" tab in the left nav-menu
        Then I should see the "My Team" Heading
        And I click on the developer having "zubair", "Backend Developer", "Hungary", "Compliantly hired" and "3,806"
        When I click on "Give bonus" button
        Then I should see the "How much bonus do you want to give zubair?" Heading
        When I fill "50" amount in input field
        And I click on Submit button on modal
        Then I should see "Okay" button

