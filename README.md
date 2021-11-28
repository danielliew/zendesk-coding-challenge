# About the project

This zendesk ticket viewer is designed in two parts - a frontend and backend. The frontend is built with `React` and `Typescript`. The backend is built using `Express JS` and `Typescript`. The testing frameworks used are `jest`, `supertest` (backend), and `react-testing-library` (frontend).

The backend connects to the Zendesk v2 API to fetch ticket data. The frontend calls the backend's REST API to display the ticket data meaningfully in a web page.

# Installation and usage

Get an [OAuth key from Zendesk](https://developer.zendesk.com/documentation/ticketing/working-with-oauth/creating-and-using-oauth-tokens-with-the-api/) and create a `.env` file in the `/backend/` directory.

Then specify the environment variable as follows

```.env
ZENDESK_OAUTH=0a347c9b2...
```

Install the dependencies via terminal by running npm install in the backend and frontend directories

```bash
# install dependencies
cd backend
npm install
cd ../frontend
npm install
```

Run the backend and frontend. You may either run in development mode which will run the services in watch mode or you may run them in production mode.

```bash
# run in development
cd backend
npm run dev
cd ../frontend
npm start

# compile and run in production
cd backend
npm run build && npm start
cd ../frontend
npm run build && serve -s build
```

Run the tests for the frontend and backend

```bash
# testing
cd backend
npm run test
cd ../frontend
npm run test
```
