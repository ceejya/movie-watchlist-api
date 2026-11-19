import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";

const router = Router();

router.post("/Register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
