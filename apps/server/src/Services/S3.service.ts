import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { config } from "../config";

const S3 = new S3Client({
  credentials: {
    accessKeyId: config.S3_ACCESS_KEY_ID!,
    secretAccessKey: config.S3_ACCESS_KEY_SECRET!,
  },
  endpoint:config.S3_ENDPOINT,
  region: "auto",
  forcePathStyle:true
});

export const generatePreSignedURL = async (
  userid: string,
  type: "Personal Information" | "Projects" |"Experience"|"Education" ,
  filename: string
): Promise<{ url: string; link: string } | null> => {
  try {
    const key = `user-uploads/${userid}/${type}/${filename}`;
    const command = new PutObjectCommand({
      Bucket: "gitfolio",
      Key: key,
      ContentType: "image/jpeg",
    });
    const url = await getSignedUrl(S3, command, { expiresIn: 300 });
    return { url, link: `${config.S3_PUBLIC_ENDPOINT}/${key}`};
  } catch (e) {
    console.log(e);
    return null;
  }
};
