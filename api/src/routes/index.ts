import express from "express";
import recordingRoutes from "./recording.routes";

const router = express.Router();
router.use("/", recordingRoutes);

export default router;