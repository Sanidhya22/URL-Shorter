import express from 'express';
import {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} from '../controllers/url.controllers.js';

const router = express.Router();

router.route('/').post(handleGenerateNewShortURL);

router.route('/analytics/:shortId').get(handleGetAnalytics);

export default router;
