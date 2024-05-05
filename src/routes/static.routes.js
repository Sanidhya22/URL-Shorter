import express from 'express';
import { URL } from '../models/url.model.js';
import { verifyAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/').get(verifyAuth, async (res, req) => {
  const allUrls = await URL.find({ createdBy: res.user._id });
  req.render('home', { data: allUrls });
});

router.route('/signup').get(async (res, req) => {
  req.render('signup');
});

router.route('/signin').get(async (res, req) => {
  req.render('signin');
});

export default router;
