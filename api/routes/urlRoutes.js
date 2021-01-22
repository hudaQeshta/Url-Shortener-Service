import express from "express";
import { shortUrl, shortUrlRedirect, allLinks } from "../../controllers/url.js";
import { protect } from "../../middleware/auth.js";
import { redirectHandler } from "../../middleware/redirect.js";

const router = express.Router();

router.route("/").post(protect, shortUrl);
router.route("/links").get(protect, allLinks);
router.route("/:shortUrl").get(protect, redirectHandler, shortUrlRedirect);

export default router;
