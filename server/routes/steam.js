import express from "express";
import { getSteamData } from "../controllers/steam.js";

const router = express.Router();

router.get("/:id", getSteamData);

//router.get("/", getStudents);
//router.post("/", createStudent);
//router.delete('/:id', deleteStudent);

export default router;
