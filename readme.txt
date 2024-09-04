README
======

Introduction
------------
Thank you for considering my application for the tester position.
In this repository, you will find an automated test script developed
as part of the evaluation task. This script is designed to test the 
functionality of a web application using WebdriverIO.

Technologies Used
-----------------
For this testing task, I used the following technologies and tools:

- JavaScript: Test scripts are written in JavaScript, ensuring clear
  and maintainable test cases.
- WebdriverIO: A robust automation framework for writing and running 
  end-to-end tests for web applications. It was chosen based on the 
  recommendation in the task description.
- Allure Reporter: Used for generating detailed and visually appealing 
  test reports. Allure provides a comprehensive overview of test execution, 
  including steps, screenshots, and logs.
- Node.js and npm: Utilized for managing dependencies and running the 
  test scripts.

Prerequisites
-------------
Before running the tests, ensure the following are installed on your system:

- Node.js: Make sure Node.js (and npm) is installed. You can download it 
  from https://nodejs.org/.
- WebdriverIO: Assuming WebdriverIO is already set up in your environment, 
  as per the task instructions.

How to Run the Tests
--------------------
Follow these steps to run the tests:

1. Clone the Repository:
   ---------------------
Start by cloning the repository to your local machine:
git clone [repository-url] cd [repository-folder]

2. Install Dependencies:
---------------------
If not done already, install the project dependencies using npm:
npm install

3. Run the Tests:
--------------
Execute the tests using the following command:
npx wdio run wdio.conf.js

This will run all the test cases based on the WebdriverIO configuration.

4. Generate and View the Allure Report:
------------------------------------
After running the tests, generate the Allure report:
npx allure generate allure-results --clean -o allure-report
You can view the report in your browser by serving it locally:
npx allure open


Additional Information
----------------------
- Test Files:
  The test case is located in the `./test/specs/` directory, 
  following the recommended structure for WebdriverIO projects.
- Additional Resources:
  The test also includes supplementary files located in
  `../pageobjects` and `../helper` that provide essential
  functions and selectors.
- Configuration: The WebdriverIO configuration is defined in the 
`wdio.conf.js` file. If any adjustments are needed to match your specific 
environment, they can be made there.

--------------------------------------------
I hope this submission meets your expectations. Please feel free to contact me 
if you need any further information or clarification.

Best regards,
Anita Khomiak.
