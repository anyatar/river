import { Router } from "express";
import RecordingController from "../controllers/recording.controller";
import AthenticationController from "../controllers/athentication.controller";
import { welcome } from "../controllers/home.controller";
import jwtAuthMiddleware from "../middlewares/auth.verify";

const router = Router();
const recordingController = new RecordingController();
const athenticationController = new AthenticationController()

router.get("/", welcome);
router.post("/register", athenticationController.register);
router.post("/login", athenticationController.login);
router.get("/users", athenticationController.users);
/*router.post("/take", jwtAuthMiddleware, recordingController.take);
router.get("/take/:takeId/status", jwtAuthMiddleware, recordingController.getTakeStatus);
router.post("/recording", jwtAuthMiddleware, recordingController.createRecording);
router.patch("/recording/:recordingId", jwtAuthMiddleware, recordingController.updateRecording);
router.get("/recording/:recordingId", jwtAuthMiddleware, recordingController.getRecording);*/

export default router;