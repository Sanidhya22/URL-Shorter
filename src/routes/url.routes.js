import express from 'express';
import { handleGenerateNewShortURL } from '../controllers/url.controllers.js';

const router = express.Router();

router.route('/').post(handleGenerateNewShortURL);

router.route('/analytics').get(handleGenerateNewShortURL);

export default router;
