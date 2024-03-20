Feature: Search talent

#  @run
  Scenario Outline: Client should be able to search talent
    Given I navigate to Client Login Page
    When I fill the login form with valid credentials for client
    When I click on "Search Talent" tab in the left nav-menu
    And I search "zubair" in the Search Field
    And I click on the talent having "<Name>", "<Role>", "<Status>", "<Skill>" and "<Salary>"
    Then I should see talent card with details "<Name>", "<Role>", "<Location>", "<Status>" and "<Salary>"

    Examples:
      | Name   | Role | Status              | Skill      | Salary | Location |
      | Zubair | QA   | Available Full Time | JavaScript | 5,190  | Angola   |

  # @run
  Scenario: Client should see error message when no profile is found
    Given I navigate to Client Login Page
    When I fill the login form with valid credentials for client
    When I click on "Search Talent" tab in the left nav-menu
    And I search "zubairwrongtestsearch" in the Search Field
    Then I should see "No profiles found. Please let us find you a match manually!" message on search talent page