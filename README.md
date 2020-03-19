# Depop Shop

An interactive application for browsing, liking and filtering items.

## Table of Contents

- [Live site](#live-site)
- [Running the app](#running-the-app)
    - [Start](#npm-start)
    - [Build](#npm-run-build)
    - [Test](#npm-run-test)
    - [Learn More](#learn-more)
- [Notes](#notes)
- [TODO](#todo)
    - [Scalable](#scalable)
    - [Features](#features)
    - [Design](#design)
    - [Feedback](#feedback)

## Live Site

Try out the app here - [https://bmanning1.github.io/depop-shop](https://bmanning1.github.io/depop-shop)

## Running the app

Run `npm i` to install the packages.<br />
To run the app locally, run `npm run start`.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### `npm run start`

Runs the app in the development mode.<br />
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

## Notes

- With scalability in mind, the app has been coded so that it will be easy to add more filters
- The data is transformed to store only the data needed in the component state to save memory in the app

## TODO

If there was more time spent on the project, the following areas could be improved.

### Scalable:
- Axios request to only load a certain amount & pagination so that you do not load thousands of items at once
- Use a global store such as Redux to reduce passing down information through components
- Add linting rules such as complexity
- Commits for each feature in the git history incase of rolling back
- Create a config file to store the API url
- Functional testing

### Features:
- Filters for more items
- Option to click on items for more information such as description
- Change currency based on client

### Design:
- Error page instead of alert
- Accessibility
