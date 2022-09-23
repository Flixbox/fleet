# Fleet Management System

Manage your cars - perfectly!


## Potential improvements & Over-Engineering

- Autocomplete car model field based on public car model api [here](https://api-ninjas.com/api/cars)
- Deployment: GitHib Pages is currently disabled to prevent leaking the API
- Mock back-end data (or set up back-end in test environment and seed)

## Setup

Install dependencies with `yarn`

Prefix any vite-based run command with `npx cross-env API_URL=<your api endpoint> <script here>`. The API URL is not hardcoded to avoid leaks.

Run `npx cross-env API_URL=<your api endpoint> yarn vite:dev` to run the front-end in dev mode.

## Tests

Note: The tests are currently using hardcoded data from the API in order to avoid back-end mocking (no overengineering rule). These tests will break when the first car element in the back-end is deleted and the data in `fixtures` will have to be updated.

Before opening the tests for the first time, run `yarn run cypress open` to set up cypress. You can also use this to run the tests.
