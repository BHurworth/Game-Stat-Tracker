import express from "express";
import { getCsgoStats } from "../controllers/csgo.js";
import { getCsgoTournaments } from "../controllers/csgoTournaments.js";
import { getCsgoNews } from "../controllers/csgoNews.js";

const router = express.Router();

router.get("/tournaments", getCsgoTournaments);

router.get("/news", getCsgoNews);

router.get("/:id", getCsgoStats);

export default router;
