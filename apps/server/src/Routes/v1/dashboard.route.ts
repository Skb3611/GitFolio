import { Router } from "express";
import { createOrUpdateEducationController, createOrUpdateExperienceController, createOrUpdateRepoController, deleteEducationController, deleteExperienceController, deleteRepoController, getUserDataController,updateUserDataController } from "../../Controllers/dashboaard.controller";
// import { authMiddleware } from "../../middleware/authMiddleware";
const router = Router()

router.get("/",getUserDataController)
router.post("/user/update",updateUserDataController)

router.post("/user/repo/update",createOrUpdateRepoController)
router.delete("/user/repo/delete/:repoId",deleteRepoController)

router.post("/user/education/update",createOrUpdateEducationController)
router.delete("/user/education/delete/:educationId",deleteEducationController)

router.post("/user/experience/update",createOrUpdateExperienceController)
router.delete("/user/experience/delete/:experienceId",deleteExperienceController)

export default router;