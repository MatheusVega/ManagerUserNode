import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';

import '@shared/container'
import routes from './routes';
import rateLimiter from './middlewares/rateLimiter';

const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("../../../../swagger_output.json");

const app = express();

app.use(rateLimiter);
app.use(express.json());
app.use(routes);
app.use("/swagger/index", swaggerUI.serve, swaggerUI.setup(swaggerFile));

export default app;
