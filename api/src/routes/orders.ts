import { Router } from "express";
import passport from "passport";
import {
  createOrderController,
  getOrderListByUserId,
} from "../controllers/orders";

const router = Router();

router.post(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  createOrderController
);
router.get(
  "/:id",
  getOrderListByUserId
);

export default router;
