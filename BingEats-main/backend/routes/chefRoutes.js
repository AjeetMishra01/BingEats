import express from "express";
import { becomeChef } from "../controllers/chefController.js";

const router = express.Router();

//Become chef route
router.post("/become", becomeChef);

export default router;
