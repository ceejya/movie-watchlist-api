import { Router } from "express";
import { register, login } from "../controllers/authController.js";

const router = Router();

router.post("/Register", register);

router.post("/login", login);

export default router;
