const express = require('express');

const ProjectRouter = require('./project/project-router.js');

const server = express();

server.use(express.json());

server.use('/api', ProjectRouter);


module.exports = server;