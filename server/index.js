require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');

const app = express();

app.listen(4000, () => console.log('Server is listening on port 4000'));
