import { Router } from "express";
import userRouter from "./userRouter";
import appointmentRouter from "./appointmentRouter";
import credentialRouter from "./credentialRouter";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointment", appointmentRouter);
router.use("/credential", credentialRouter);


export default router;

