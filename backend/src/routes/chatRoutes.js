import express from "express";
import { getStreamToken } from "../controllers/chatController.js";
import { porotectRoute } from "../middleware/protectRoute.js";

const router = express.Router()

router.get("/token", porotectRoute, getStreamToken);

export default router