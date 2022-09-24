# Fleet Management System

Manage your cars - perfectly!

## Potential improvements & Over-Engineering

- Autocomplete car model field based on public car model api [here](https://api-ninjas.com/api/cars)
- Deployment: GitHub Pages is currently disabled to prevent leaking the API
- Mock back-end data (or set up back-end in test environment and seed)

## Setup

Install dependencies with `yarn`

Prefix any frontend-based command (like running the webapp) with `npx cross-env API_URL=<your api endpoint> <script here>`. The API URL is not hardcoded to avoid leaks.

For Cypress, use CYPRESS_API_URL instead of API_URL.

Run `npx cross-env API_URL=<your api endpoint> yarn vite:dev` to run the front-end in dev mode.

## Tests

Before opening the tests for the first time, run `npx cross-env CYPRESS_API_URL=<your api endpoint> yarn run cypress open` to set up cypress. You can also use this to run the tests.
