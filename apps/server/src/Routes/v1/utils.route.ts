import { Router } from "express";
import { getUserLocationController } from "../../Controllers/utils.controller";
const router:Router = Router()

router.get("/get-location",getUserLocationController)

export default router