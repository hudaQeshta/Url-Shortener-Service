import Url from "../models/Url.js";
import asyncHandler from "express-async-handler";
import validUrl from "valid-url";
import shortid from "shortid";

// @route    POST api/url
// @desc     Create a short url
// @access   Public
const shortUrl = asyncHandler(async (req, res) => {
  const { givenUrl } = req.body;
  const baseUrl = process.env.BASE_URL;
  if (!validUrl.isUri(baseUrl)) {
    res.status(401);
    throw new Error("Invalid base Url");
  }

  const urlCode = shortid.generate();

  if (validUrl.isUri(givenUrl)) {
    try {
      let url = await Url.findOne({ givenUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = urlCode;

        url = new Url({
          givenUrl,
          shortUrl,
        });
        await url.save();
        res.json(`${baseUrl}/${url.shortUrl}`);
      }
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  } else {
    res.status(401);
    throw new Error("Invalid given Url");
  }
});

// @route    GET api/url/:shortUrl
// @desc     Redirect to a long/given url
// @access   Public
const shortUrlRedirect = asyncHandler(async (req, res) => {
  const shortUrl = req.params.shortUrl;
  try {
    const url = await Url.findOne({ shortUrl });

    if (url) {
      return res.redirect(url.givenUrl);
    } else {
      res.status(404);
      throw new Error("Url Not Found");
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

// @route    GET api/url/links
// @desc     Lists All Links in DB
// @access   Public
const allLinks = asyncHandler(async (req, res) => {
  try {
    const urls = await Url.find({});
    if (urls) {
      return res.json(urls);
    } else {
      res.status(404);
      throw new Error("No Urls Found");
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

export { shortUrl, shortUrlRedirect, allLinks };
