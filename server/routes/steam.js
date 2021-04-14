import express from "express";
import { getSteamData } from "../controllers/steam.js";

const router = express.Router();

router.get("/:id", getSteamData);

export default router;
