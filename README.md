# Teasting React with Jest, Enzyme and Cypress

## Features

- React
- Webpack
- Testing
  - Jest + Enzyme: Unit/Integration + Snapshot Test
  - E2E Tests: Cypress
  
## Installation

- `git clone https://github.com/thomast74/testing-react.git`
- cd testing-react
- npm install
- npm start
- visit `http://localhost:8080/`
- npm test
- npm test:cypress

## Write test that fully tests the small app

Testing should cover the full functionality of the application, good path and not so happy path need to be considered.

All tests have to written in the file `App.spec.js`, which currently is empty.

The application is already setup so nothing else than the test itself need to be written.

The following are topics to be considered:
- Reducer is fully tested
- Components are snaphot tested
- Components are rendered with properties
- Buttons are tested
- Data fetching is tested


## Write E2e tests with cypress

The E2e test should cover all functionalities that application offers and should be written into the file `cypress/integration/App.e2e.js`.
This file is currently empty.
