# Overview
Live Project available [here](https://shiny-halva-6132b4.netlify.app/login)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Available Scripts

In the project directory, you can run:
### `npm i`

To install node modules and dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### High Level Approach
- Created Dummy Data For Users and Products.
- Added role_type key in users to give users a role.
- Created a role_types.json file for roles in such a way that particular roles have have permission of specific module. For Example Tab visible to user is products only, whereas tabs visible to admin are users and products.
- Created states of stakeholder, users and products at top level.
- Used Context for passing data to the child components.
- Used React Router for Routing.
- Used Bootstrap for styling.
- Used Bcrypt for password validation.
- Used localStorage to store data of logged in user.
- Used role_types.json file on Different Pages to show things specific to the logged in user.
