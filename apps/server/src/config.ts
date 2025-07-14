import dotenv from "dotenv"
dotenv.config()
export const config={
  PORT:process.env.PORT,
  CLERK_SECRET_KEY:process.env.CLERK_SECRET_KEY,
  CLERK_JWT_KEY:process.env.CLERK_JWT_KEY,
  S3_BUCKET:process.env.S3_BUCKET,
  S3_PUBLIC_ENDPOINT:process.env.S3_PUBLIC_ENDPOINT,
  S3_ENDPOINT:process.env.S3_ENDPOINT,
  S3_ACCESS_KEY_ID:process.env.S3_ACCESS_KEY_ID,
  S3_ACCESS_KEY_SECRET:process.env.S3_ACCESS_KEY_SECRET,
  S3_REGION:process.env.S3_REGION,
}