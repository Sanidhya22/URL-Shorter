import express from 'express';
import { handleDynamicShortId } from '../controllers/shortId.controllers.js';

const router = express.Router();

router.route('/').post(handleDynamicShortId);

export default router;
