# Installation and usage

Get started by installing the dependencies and running the frontend and backend. It may be more convenient to run the services in development mode.

```bash
# install dependencies
cd backend
npm install
cd ../frontend
npm install

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

# testing
cd backend
npm run test
cd ../frontend
npm run test
```
