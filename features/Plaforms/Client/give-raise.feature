# Feature: Given Raise
#    @run
#     Scenario Outline: As a client, I want to give raise to the developer
#         Given I navigate to Client Login Page
#         When I fill the login form with valid credentials for client
#         Then I should see the "Dashboard" Heading
#         When I click on "My Team" tab in the left nav-menu
#         And I click on the developer having "<Name>", "<Role>", "<Location>", "<JobType>" and "<Salary>"
#         And I click on "Give Raise" button
#         And I set "2" dollars raise for the developer
#         And I filled the date of today in date field
#         And I write "This is for testing" on the text area of Give raise
#         And I click on "Submit" button
#         Then I should see "Okay" button

#         Examples:
#             | Name   | Role              | Location | JobType           | Salary |
#             | zubair | Backend Developer | Hungary  | Compliantly hired | 3,633  |