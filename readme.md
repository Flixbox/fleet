# Fleet Management System

Manage your cars - perfectly!

Note: GitHub Pages can be enabled manually in the CI. It's currently disabled in order to prevent API URL leakage.

## Setup

Install dependencies with `yarn`

Prefix any vite-based run command with `npx cross-env API_URL=<your api endpoint> <script here>`. The API URL is not hardcoded to avoid leaks.

## Tests

Before opening the tests for the first time, run `yarn run cypress open` to set up cypress.
