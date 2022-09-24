# Fleet Management System

[![Build and Test](https://github.com/Flixbox/fleet/actions/workflows/deploy.yml/badge.svg?branch=challenge)](https://github.com/Flixbox/fleet/actions/workflows/deploy.yml)
[![](https://img.shields.io/static/v1?label=UI&message=Mantine&color=blue&logo=jss)](https://mantine.dev)
![](https://img.shields.io/static/v1?label=CSS&message=none%20in%20source&color=blue&logo=css3)
![](https://img.shields.io/static/v1?label=Overengineered&message=at%20least%2030%&color=green&logo=react)

Manage your cars - perfectly!



https://user-images.githubusercontent.com/14835021/192100578-fda5413f-7a18-4296-aa42-a4283104d138.mp4



## Time estimate

Interval 1 (2022-09-23 to 2022-09-24): 2:30h

Interval 2 (2022-09-24): 3h

Maybe add 30 minutes for minor improvements. That makes a total time of 6 hours.

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
- Edit existing cars

## Setup

Install dependencies with `yarn`

Prefix any frontend-based command (like running the webapp) with `npx cross-env API_URL=<your api endpoint> <script here>`. The API URL is not hardcoded to avoid leaks. It ends on `/cars` (not `/` and not `/cars/`).

For Cypress, use `CYPRESS_API_URL` instead of `API_URL`.

## Run

Run `npx cross-env API_URL=<your api endpoint> yarn vite:dev` to open the webapp in dev mode.

## Tests

Make sure that the webapp is running.

Run `npx cross-env CYPRESS_API_URL=<your api endpoint> yarn cy:open` to open cypress in watch mode.

## GitHub Actions

CI runs are recorded [here](https://github.com/Flixbox/fleet/actions).
