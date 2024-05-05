import express from 'express';
import {
  handleUserSignIn,
  handleUserSignUp,
  handleUserSignOut,
} from '../controllers/user.controllers.js';
import { verifyAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/signup').post(handleUserSignUp);
router.route('/signin').post(handleUserSignIn);
router.route('/signout').post(verifyAuth, handleUserSignOut);

export default router;
