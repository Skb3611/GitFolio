import { generatePreSignedURLController } from "../../Controllers/S3.controller"; 
import {Router} from "express"
import { authMiddleware } from "../../middleware/authMiddleware";

const router:Router =Router()

router.post("/generatePreSignedURL",generatePreSignedURLController) 

export default router