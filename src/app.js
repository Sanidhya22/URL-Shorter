import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import urlRoutes from './routes/url.routes.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import { handleDynamicShortId } from './controllers/shortId.controllers.js';

const app = express();

const BASE_URL = '/api';

app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// enable cors
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
//enable cookie-parser
app.use(cookieParser());

app.use(`${BASE_URL}/url`, urlRoutes);

app.get(`${BASE_URL}/:shortId`, handleDynamicShortId);

app.use(errorHandler);

export default app;
