import { Request, Response } from "express";
import {
  updateUserData,
  createOrUpdateRepo,
  deleteRepo,
  createOrUpdateEducation,
  deleteEducation,
  createOrUpdateExperience,
  deleteExperience,
  getUserDataById,
} from "../Services/dashboard.service";

export const getUserDataController = async (req: Request, res: Response) => {
  try {
    const userId = req.auth?.user.id;
    if (!userId) {
      res.status(400).json({ message: "userId is required", status: "error" });
      return;
    }
    const data = await getUserDataById(userId);
    data
      ? res.status(200).json({
          message: "Data fetched successfully",
          data: data,
          status: "success",
        })
      : res.status(404).json({
          message: "Data not found",
          status: "error",
        });
    return;
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something went wrong",
      status: "error",
    });
  }
};

export const updateUserDataController = async (req: Request, res: Response) => {
  try {
    const userId = req.auth?.user.id;
    if (!userId) {
      res.status(400).json({ message: "userId is required", status: "error" });
      return;
    }
    const data = req.body;
    const response = await updateUserData(userId, data);
    response
      ? res.status(200).json({
          message: "Data updated successfully",
          status: "success",
        })
      : res.status(400).json({
          message: "Data not updated",
          status: "error",
        });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something went wrong",
      status: "error",
    });
  }
};

export const createOrUpdateRepoController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.auth?.user.id;
    if (!userId) {
      res.status(400).json({ message: "userId is required", status: "error" });
      return;
    }
    const data = req.body;
    const response = await createOrUpdateRepo(userId, data);
    response
      ? res.status(200).json({
          message: "Data updated successfully",
          status: "success",
        })
      : res.status(400).json({
          message: "Data not updated",
          status: "error",
        });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something went wrong",
      status: "error",
    });
  }
};
export const deleteRepoController = async (req: Request, res: Response) => {
  try {
    const userId = req.auth?.user.id;
    if (!userId) {
      res.status(400).json({ message: "userId is required", status: "error" });
      return;
    }
    const repoId = req.params.repoId;
    if (!repoId) {
      res.status(400).json({ message: "repoId is required", status: "error" });
      return;
    }
    const result = await deleteRepo(userId, repoId);
    result
      ? res.status(200).json({
          message: "Data deleted successfully",
          status: "success",
        })
      : res.status(400).json({
          message: "Data not deleted",
          status: "error",
        });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something went wrong",
      status: "error",
    });
  }
};

export const createOrUpdateEducationController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.auth?.user.id;
    if (!userId) {
      res.status(400).json({ message: "userId is required", status: "error" });
      return;
    }
    const data = req.body;
    const response = await createOrUpdateEducation(userId, data);
    response
      ? res.status(200).json({
          message: "Data updated successfully",
          status: "success",
        })
      : res.status(400).json({
          message: "Data not updated",
          status: "error",
        });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something went wrong",
      status: "error",
    });
  }
};
export const deleteEducationController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.auth?.user.id;
    if (!userId) {
      res.status(400).json({ message: "userId is required", status: "error" });
      return;
    }
    const educationId = req.params.educationId;
    if (!educationId) {
      res
        .status(400)
        .json({ message: "educationId is required", status: "error" });
      return;
    }
    const result = await deleteEducation(userId, educationId);
    result
      ? res.status(200).json({
          message: "Data deleted successfully",
          status: "success",
        })
      : res.status(400).json({
          message: "Data not deleted",
          status: "error",
        });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something went wrong",
      status: "error",
    });
  }
};

export const createOrUpdateExperienceController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.auth?.user.id;
    if (!userId) {
      res.status(400).json({ message: "userId is required", status: "error" });
      return;
    }
    const data = req.body;
    const response = await createOrUpdateExperience(userId, data);
    response
      ? res.status(200).json({
          message: "Data updated successfully",
          status: "success",
        })
      : res.status(400).json({
          message: "Data not updated",
          status: "error",
        });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something went wrong",
      status: "error",
    });
  }
};

export const deleteExperienceController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.auth?.user.id;
    if (!userId) {
      res.status(400).json({ message: "userId is required", status: "error" });
      return;
    }
    const experienceId = req.params.experienceId;
    if (!experienceId) {
      res
        .status(400)
        .json({ message: "experienceId is required", status: "error" });
      return;
    }
    const result = await deleteExperience(userId, experienceId);
    result
      ? res.status(200).json({
          message: "Data deleted successfully",
          status: "success",
        })
      : res.status(400).json({
          message: "Data not deleted",
          status: "error",
        });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something went wrong",
      status: "error",
    });
  }
};
