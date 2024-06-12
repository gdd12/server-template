const express = require('express');
const bodyParser = require('body-parser');
const { IssueDBConnection } = require('./database/db.js')
const config = require('config');

const router = require('./controllers/app.js')

const app = express();
const {
  app: {
    host: Host,
    port: Port
  }
} = config

app.use(bodyParser.json());
app.use(router)

IssueDBConnection().then(() => {
  app.listen(Port, Host, () => {
    console.log(`Server is running on http://${Host}:${Port}`);
  });
}).catch(error => {
  console.error("Unable to start the server:", error);
});