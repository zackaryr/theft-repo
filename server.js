const express = require('express');
const fetch = require('node-fetch');

const app = express();

const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));