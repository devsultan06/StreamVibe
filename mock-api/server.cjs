const express = require('express');
require('dotenv').config();
const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Serve static files from the 'images' folder
server.use('/images', express.static(path.join(__dirname, 'images')));
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});


