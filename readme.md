# Fleet Management System

[![Build and Test](https://github.com/Flixbox/fleet/actions/workflows/deploy.yml/badge.svg?branch=challenge)](https://github.com/Flixbox/fleet/actions/workflows/deploy.yml)

[
![](https://img.shields.io/codeclimate/maintainability/Flixbox/fleet?style=flat&logo=code%20climate)
![](https://img.shields.io/codeclimate/issues/Flixbox/fleet?style=flat&logo=code%20climate)
![](https://img.shields.io/codeclimate/tech-debt/Flixbox/fleet?style=flat&logo=code%20climate)
](https://codeclimate.com/github/Flixbox/fleet)

Manage your cars - perfectly!

## Features

- Show all cars in a list
- Add a new car
- Delete any car in the list
- Error handling
- Tests

## Possible improvements & Over-Engineering

- Autocomplete car model field based on public car model api [here](https://api-ninjas.com/api/cars)
- Deployment: GitHub Pages is currently disabled to prevent leaking the API
- Mock back-end data (or set up back-end in test environment and seed) - Currently we're deleting and re-adding the same car, which can cause errors and false positives if a third party adds similar data
- Test coverage

## Setup

Install dependencies with `yarn`

Prefix any frontend-based command (like running the webapp) with `npx cross-env API_URL=<your api endpoint> <script here>`. The API URL is not hardcoded to avoid leaks. It ends on `/cars`.

For Cypress, use `CYPRESS_API_URL` instead of `API_URL`.

## Run

Run `npx cross-env API_URL=<your api endpoint> yarn vite:dev` to open the front-end in dev mode.

## Tests

Run `npx cross-env CYPRESS_API_URL=<your api endpoint> yarn cy:open` to open cypress in watch mode.

## GitHub Actions

CI runs are recorded [here](https://github.com/Flixbox/fleet/actions).
