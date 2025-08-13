import { Request, Response } from "express";
import { onBoardingProcess } from "../Services/onboarding.service";
export const onBoardingController = async (req: Request, res: Response) => {
  try {
    const userId = req?.auth?.userId;
    const { githubURL, authType } = req.body;
    if (!userId) {
      res.status(401).json({ message: "Unauthorized", status: false });
      return;
    }
    const { message, status } = await onBoardingProcess(
      githubURL,
      userId,
      authType
    );
    status
      ? res.status(200).json({ status, message })
      : res.status(400).json({ message, status });
  } catch (e) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
    console.log(e);
  }
};
