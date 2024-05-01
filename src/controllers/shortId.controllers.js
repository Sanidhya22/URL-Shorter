import { URL } from '../models/url.model.js';

export const handleDynamicShortId = async (req, res, next) => {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: { timestamp: Date.now() },
        },
      }
    );
    res.redirect(entry.redirectURL);
  } catch (error) {
    next(error);
  }
};
