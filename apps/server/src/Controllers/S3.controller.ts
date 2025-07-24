import { generatePreSignedURL } from "../Services/S3.service";
import { Request, Response } from "express";

export const generatePreSignedURLController = async (
  req: Request,
  res: Response
) => {
  try {
    const { type, filename } = req.body;
    console.log(req.body)
    const userid = req.auth?.userId;
    if (!userid) throw new Error("Unauthorized");
    const presignedURL = await generatePreSignedURL(userid, type, filename);
    presignedURL
      ? res
          .status(200)
          .json({
            message: "PreSigned URL Generated",
            status: "success",
            data: presignedURL,
          })
      : res
          .status(500)
          .json({ message: "Error Generating Url", status: "error" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error", status: "error" });
  }
};

