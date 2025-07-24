import { Router } from "express";
import { getUserDataController } from "../../Controllers/renderer.controller";

const router:Router = Router()

router.get("/:username",getUserDataController)

export default router