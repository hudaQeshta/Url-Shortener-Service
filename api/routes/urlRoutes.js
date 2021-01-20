import express from "express";
import { shortUrl, shortUrlRedirect, allLinks } from "../../controllers/url.js";

const router = express.Router();

router.post("/", shortUrl);
router.get("/links", allLinks);
router.get("/:shortUrl", shortUrlRedirect);

export default router;
