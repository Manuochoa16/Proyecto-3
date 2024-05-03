import { Router } from "express";
import { getUserById, getUsers, registerUser, loginUser} from "../controllers/userController";
// import auth from "../middlewares/auth";

const router: Router = Router();


// router.post("/users", createUser);
router.get("/", getUsers)
router.get("/:id", getUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);


export default router;

