import { Router } from "express";
import { getUserDataController,getUserImageDataController } from "../../Controllers/renderer.controller";

const router:Router = Router()

router.get("/:username",getUserDataController)
router.get("/image/:username",getUserImageDataController)
export default router