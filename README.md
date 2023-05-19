# Admin Portal

This repository is deployed to three hosts on [vercel.com](https://vercel.com):

- https://admin.inprospecttechnologies.in/
- ~~https://admin.neuropod.io/~~
- https://admin.eklavvyalms.com/

It deploys from one source code to three different hosts with the help of
environment variables.

## Table of Contents

* [Requirements](#requirements)
* [Setup](#setup)
* [Development](#development)
* [Commands](#commands)

---

## Requirements

- [Node.js 16.x](https://nodejs.org/)
- As of now backend server is required to run locally, we will host a dedicated
testing server soon.

---

## Setup

The project is configured with environment variables, look at [env_sample](env_sample)
file for reference.

Most of the times the file can be renamed to env and used as is, if any variables
are missing contact project admin.

---

## Development

Do not write code in **main** and **staging** branches. Checkout into another
branch and delete it when it gets merged.

To checkout, run:

```sh
git checkout -b <branch_name>
```

To start development, run:

```sh
yarn install
yarn run serve:local
```

---

## Commands

| Command                   | Description |
|---------------------------|-------------|
| `yarn run format`          | Formats the frontend and server code using **prettier**.
| `yarn run serve:local`     | Runs the code in development configuration.
| `yarn run build:production`| Builds a production build in `dist` folder.

---
