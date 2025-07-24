import { Request, Response } from "express";
import { getUserDataByUsername } from "../Services/dashboard.service";
export const getUserDataController = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;
    if (!username) {
      res.status(400).json({ message: "No username", status: false });
      return;
    }
    const data = await getUserDataByUsername(username);
     data
      ? res.status(200).json({ message: "Data fetched", status: true, data })
      : res.status(404).json({ message: "no user found", staus: false });
  } catch (e) {
    console.log(e);
  }
};
