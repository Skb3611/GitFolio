import { Request, Response } from "express";
import { getUserLocation } from "../Services/utils.service";

export const getUserLocationController = async (
  req: Request,
  res: Response
) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    console.log(ip)
    if (ip) {
      const location = await getUserLocation(ip as string);
      if (location) {
        location 
          ? res
              .status(200)
              .json({ status: true, message: "Location found", location: "IN" })
          : res
              .status(200)
              .json({
                status: true,
                message: "Location found",
                location: "US",
              });
      } else {
        res
          .status(200)
          .json({ status: false, message: "Location not found. Default Location",location:"US" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};
