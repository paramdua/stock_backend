import { Router } from "express";
import {  getProjects,buyCall } from "../controllers/projectController";

const router = Router();

router.get("/", getProjects);

router.post("/", buyCall);

export default router;
