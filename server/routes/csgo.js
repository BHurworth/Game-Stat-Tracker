import express from "express";
import { getCsgoStats } from "../controllers/csgo.js"

const router = express.Router();

router.get('/:id', getCsgoStats);

//router.get("/", getStudents);
//router.post("/", createStudent);
//router.delete('/:id', deleteStudent);

export default router;
