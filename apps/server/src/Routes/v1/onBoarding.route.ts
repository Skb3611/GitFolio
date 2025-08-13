import { Router } from "express";
import { onBoardingController } from "../../Controllers/onBoarding.controller";

const router: Router = Router();

router.post("/", onBoardingController);

export default router;
