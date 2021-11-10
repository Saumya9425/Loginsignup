const express = require('express');
const mongoose = require('./db/db')
const app= express();
app.use(express.json());
const http = require('http');
const port=3000;
const userroute = require('./route/user');
app.use(userroute);

const server=http.createServer(app);
server.listen(port);
console.log('connected');
