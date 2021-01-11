# primarybid

Tests created using Webdriverio, Jasmine, and Babel compiler as per specifications.
Using this framework it would be very straightforward to add BDD style syntax. 

#### Steps to install from scratch
1. Install Node.js
2. npm init -y
3. npm i --save-dev @wdio/cli
4. npx wdio config -y
5. npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register

To run tests from command line navigate to test directory and run this command:
npx wdio wdio.conf.js

#### UX observations:
- Breadcrumb trail I believe would be very useful for both end user and automation tests.
- Sign up page was problematic for tests, could be some background processes causing errors, solved the problem short term using browser.pause.
- I encountered some issues with pages returning white screens, perhaps low memory issue on the server, or something on my end. 
- Sign up page when checking non-matching passwords also removes email address unnecessarily from its field.
- Also on Sign up page, validation error remains while user is addressing or has addressed the issue.
- On partial sign up, if user returns to main screen, a Log Out button is displayed despite user not completing sign up flow.
- Terms and conditions on sign up page, perhaps a checkbox would work well here?
