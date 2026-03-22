import { RefundsController } from "@/controllers/refunds-controller";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";
import { Router } from "express";

const refundsRoutes = Router()
const refundsController = new RefundsController()

refundsRoutes.post("/", verifyUserAuthorization(["manager", "employee"]), refundsController.create)
refundsRoutes.get("/:id", verifyUserAuthorization(["manager", "employee"]), refundsController.show)
refundsRoutes.get("/", verifyUserAuthorization(["manager"]), refundsController.index)

export { refundsRoutes }