This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Unit Tests

Please write appropriate units test for the `src/App.js` application and its components into the `src/App.spec.js` file using mocha.

The applications full functionality needs to be tested, as well as click events simulated, via unit/integration tests.

There is a simple (not working) backend call in the App component, this needs to be tested as part of the unit/integration tests.

Running tests via `npm run test:unit` provides you feedback.

# Snapshot Testing

Write snapshot tests for the two components the application offers into `src/App.snapshot.js`. This test can be executed via `npm run test:snapshot`.

# E2E Testing

The application should be tested E2E via cypress in the file `cypress/integration/App.e2e.js`. This test can be executed via `npm run cypress`
