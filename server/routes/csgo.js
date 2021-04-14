import express from "express";
import { getCsgoStats } from "../controllers/csgo.js";
import {getCsgoTournaments} from "../controllers/csgoTournaments.js"

const router = express.Router();

router.get("/tournaments", getCsgoTournaments);

router.get("/:id", getCsgoStats);

export default router;
