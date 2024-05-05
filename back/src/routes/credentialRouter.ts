import { Router } from "express";
import { createCredentialController, validateCredentialsController } from "../controllers/credentialController";

const router: Router = Router();

router.post("/credential", createCredentialController);
router.post("/validate-credentials", validateCredentialsController);

export default router;