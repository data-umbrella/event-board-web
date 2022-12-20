# Contributing to the Data Umbrella Event Board

## About
This event board application is built with [ReactJS](https://reactjs.org/) and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

There are two parts:  
1. front-end: [event-board-web](https://github.com/data-umbrella/event-board-web) repository
1. back-end: [event-board-api](https://github.com/data-umbrella/event-board-api) repository

## Getting started

### Requirements & Installation
- [Git](https://git-scm.com/): an open source version control system
- [Node​.js​](https://www.techtarget.com/whatis/definition/Nodejs)​: is an open source, cross-platform runtime environment for executing JavaScript code
- [npm](https://docs.npmjs.com/cli/v6/commands/npm): is the JavaScript package manager

### Fork & Clone the repo

```bash
git clone git@github.com:data-umbrella/event-board-web.git
```

You can simply clone the repository to the get code with the command above. To make code contributions there are two options.

1. If you have joined our community and have already been added as a contributor to the project, then you can clone the code as described above.
2. If have an idea for a feature or solution to a bug, and want to make open source contribution you can fork the repository and open a pull request. See GitHub's [Fork a Repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) tutorial for more information about forking repositories.

## Setting up development environment

### Install correct Node.js version

This application depends on Node.js and `npm`. We recommend using a [Node Version Manager](https://github.com/nvm-sh/nvm) (`nvm`) for managing node versions. This application is current being developed on **Node 18.4.0**. 

To check the version of node:  
```
node -v
```

To switch to the correct version of node, use:
```
nvm use
```

If you don't have the correct version of node installed, use:
```
nvm install 18.4.0
```

### Install Dependencies

Install the dependencies defined in the `package.json` file by running 

```
cd event-board-web
npm install
```

### Starting development server

This web application depends on an API defined by [https://github.com/data-umbrella/event-board-api](https://github.com/data-umbrella/event-board-api) which has instructions for running the backend API locally via docker. To quickly get started with web application without the need for the backend running locally, you can run the development server with a fake backend powered by [mirage.js](https://miragejs.com) by running the start command with the dev modifier.

```
npm run start:dev
```

The React app will start up in development mode and be accessible at [http://localhost:3000](http://localhost:3000). The page will reload when you make changes. You may also see any lint errors in the console.

### Testing backend in development

To test the web application with the [event-board-api](https://github.com/data-umbrella/event-board-api) backend running locally, create a `.env` file with the following config.

```
REACT_APP_API_URL=http://localhost:8000
```

After starting up `event-board-api` server, simply run the start command.

```
npm start
```

### Running tests

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm test
```

### Running static code analysis

Runs [ESlist](https://eslint.org/docs/latest/user-guide/command-line-interface) for static code analysis. Particularly helpful when you are debugging react-scripts build issues due to linter errors.

```
npm lint
```
### Pull Request & Code Review

For all contributions (documentation, bug fixes, new features), it is required to create a feature branch and then to submit a pull request. All pull requests will be reviewed by the project maintainers before being merged into the main branch. Maintainers may request changes to be made to pull requests before your code is approved. The repository is configured to automatically run tests and static code analysis via GitHub Actions when a pull request is opened or a branch is updated. All tests and linter checks must pass in order to merge the pull request.

## Deployment

This application is deployed on Digital Ocean App Platform as a static application. For more information about deploying React applications on DO App Platform see the tutorial [How To Deploy a React Application to DigitalOcean App Platform](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-react-application-to-digitalocean-app-platform).

---

## Resources

This is a playlist of 3 videos, [Intro to React Tutorial](https://www.youtube.com/playlist?list=PLBKcU7Ik-ir9bAT2eXmQ4Ojn2--hT3O87):  
1. React Tutorial Part 1: [Background](https://youtu.be/jNO-pPR7zkg)
1. React Tutorial Part 2: [JavaScript, Node.js](https://youtu.be/JWt4Z4sAlxk)
1. React Tutorial Part 3: [React Fundamentals, Build Your First React Front-end Application](https://youtu.be/MSAbOBHGkhw)

This is a playlist of 3 videos, [Intro to Django](https://www.youtube.com/playlist?list=PLBKcU7Ik-ir9HhpZQr3WolhYgbqtZSJZr):  
1. Django Tutorial Part 1: [Python for Beginners](https://youtu.be/Yr1ewxg8os8)
1. Django Tutorial Part 2: [Intro to Web Development Frameworks](https://youtu.be/K4NQmrGEWGM)
1. Django Tutorial Part 3: [Building Your First Django Application](https://www.youtube.com/watch?v=QTQSzirDs8E&list=PLBKcU7Ik-ir9HhpZQr3WolhYgbqtZSJZr&index=3&t=1s)

---
## Contributing Guidelines

1) To claim an issue, "I am working on it" and then you can start working on it; there is no need to wait to be assigned on an issue.
2) A pull request should be submitted within two weeks or someone else can work on the issue.

## Thank you
Thank you for contributing to the Data Umbrella Event Board.
