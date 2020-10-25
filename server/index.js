const express = require('express');
const bodyParser = require('body-parser');
const connectMongo = require('./mongoose/connectMongo');
const findUserForLogin = require('./mongoose/findUserForLogin');
const updateRate = require('./mongoose/updateRate');
const checkEmail = require('./mongoose/checkEmail');
const registerUser = require('./mongoose/registerUser');

const app = express();
const jsonParser = bodyParser.json();

connectMongo();

app.post('/api/login', jsonParser, async (req, res) => {
  const response = await findUserForLogin(req.body.email, req.body.password);
  res.send(response);
});

app.patch('/api/updateRate', jsonParser, async (req, res) => {
  updateRate(req.body.id, req.body.rate);
  res.send(200);
});

app.post('/api/checkEmail', jsonParser, async (req, res) => {
  const existEmail = await checkEmail(req.body.email);
  res.send(existEmail);
});

app.post('/api/registerUser', jsonParser, async (req, res) => {
  const created = await registerUser(req.body);
  res.send(created);
});

// const port = process.env.PORT || 80;
const port = 3000;
console.log(`listen on: ${port}`);
app.listen(port);
