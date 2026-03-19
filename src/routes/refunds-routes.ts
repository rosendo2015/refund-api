import { RefundsController } from "@/controllers/refunds-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { Router } from "express";

const refundsRoutes = Router()
const refundsController = new RefundsController()

refundsRoutes.use(ensureAuthenticated)

refundsRoutes.post("/", refundsController.create)

export { refundsRoutes }