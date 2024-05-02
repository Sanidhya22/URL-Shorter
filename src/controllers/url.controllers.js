import { URL } from '../models/url.model.js';
import { ApiError } from '../utils/apiError.js';
import { generateShortId } from '../utils/generateShortId.js';

export const handleGenerateNewShortURL = async (req, res, next) => {
  try {
    const body = req.body;
    if (!body.url) {
      throw new ApiError(400, 'URl fields are required');
    }

    //Can any other libery to generate Short ID's
    const shortID = generateShortId();
    const urlResponse = await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitedHistory: [],
    });
    console.log(urlResponse);
    return res.json({ id: shortID });
  } catch (error) {
    next(error);
  }
};

export const handleGetAnalytics = async (req, res, next) => {
  try {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (error) {
    next(error);
  }
};
