import express from 'express';
import { URL } from '../models/url.model.js';

const router = express.Router();

router.route('/').get(async (res, req) => {
  const allUrls = await URL.find({});

  // Send data to the view
  req.render('home', { data: allUrls });
});

export default router;
