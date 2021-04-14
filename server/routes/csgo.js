import express from "express";
import { getCsgoStats } from "../controllers/csgo.js";

const router = express.Router();

router.get("/:id", getCsgoStats);

export default router;
