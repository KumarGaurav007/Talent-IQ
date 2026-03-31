import express from "express"
import { porotectRoute } from "../middleware/protectRoute.js";
import { createSession, endSession, getActiveSessions, getMyrecentSessions, getSessionById, joinSession } from "../controllers/sessionController.js";

const router = express.Router()

router.post("/",porotectRoute, createSession)
router.get("/active", porotectRoute, getActiveSessions)
router.get("/my-recent", porotectRoute, getMyrecentSessions)
router.get("/:id", porotectRoute, getSessionById)
router.post("/:id/join", porotectRoute, joinSession)
router.post("/:id/end", porotectRoute, endSession)

export default router;