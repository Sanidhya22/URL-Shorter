import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as path from 'path';
import urlRoutes from './routes/url.routes.js';
import staticRoutes from './routes/static.routes.js';
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
//enable ejs engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

app.use(`${BASE_URL}/`, staticRoutes);

app.use(`${BASE_URL}/url`, urlRoutes);

app.get(`${BASE_URL}/:shortId`, handleDynamicShortId);

app.use(errorHandler);

export default app;
