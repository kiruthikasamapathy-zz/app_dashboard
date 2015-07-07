# Dashboard to display application version

# Build
  `lineman build`

# Test
  `lineman spec`

# Run
  `lineman run`
   Open your web browser to localhost:8000

# Running Tests

This template was used as the basis of [@davemo](http://www.github.com/davemo)'s [Testing Strategies for Angular JS](http://www.youtube.com/watch?v=UYVcY9EJcRs) screencast, and contains all the tests we wrote in the screencast and a few more!

To run the unit tests:

1. `lineman run` from 1 terminal window
2. `lineman spec` from another terminal window, this will launch Testem and execute specs in Chrome

To run the end-to-end tests:

## End-to-End Tests

1. `npm install protractor`
2. `./node_modules/protractor/bin/webdriver-manager update`
3. Make sure you have chrome installed.
4. `lineman run` from 1 terminal window
5. `lineman grunt spec-e2e` from another terminal window
