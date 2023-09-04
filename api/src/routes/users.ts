// product route
import { Router } from "express";
import {   
  createUser,
  logInWithPassword,
  updateUserController,
} from "../controllers/users";
import passport from "passport";

const router = Router();

router.post("/", createUser);

//Login/Register
router.post("/login", logInWithPassword)

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserController
);




export default router;
