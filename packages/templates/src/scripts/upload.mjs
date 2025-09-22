import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import { generateTemplateMeta } from "./build.mjs";
dotenv.config();
const s3 = new S3Client({
  endpoint: process.env.S3_ENDPOINT,
  region: "auto",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_ACCESS_KEY_SECRET,
  },
});
const __filename = fileURLToPath(import.meta.url);
const JSONPath = path.resolve(__filename, "../uploaded.json");
const uploadedJSON = JSON.parse(fs.readFileSync(JSONPath, "utf-8"));
const __dirname = path.resolve(path.dirname(__filename), "../Templates");


const uploadToS3 = async (filePath, key) => {
  const fileContent = fs.readFileSync(filePath);
  const contentType = filePath.endsWith(".mp4") ? "video/mp4" : "image/png";
  try {
    let res = await s3.send(
      new PutObjectCommand({
        Bucket: "gitfolio",
        Key: key,
        Body: fileContent,
        ContentType: contentType,
      })
    );
  } catch (e) {
    console.log(e);
  }
};

// Example usage
const run = async () => {
  const folders = fs.readdirSync(__dirname);

  folders.forEach((folder) => {
    const folderPath = path.join(__dirname, folder);

    if (
      !fs.statSync(folderPath).isDirectory() ||
      folderPath.includes("components")
    )
      return;
    if (uploadedJSON[folder]) {
      console.log(folder + " Already Uploaded");
      return;
    }
    const assetsPath = path.join(folderPath, "preview");
    if (!fs.statSync(assetsPath)) {
      console.log("No assets folder in ", folder);
      return;
    }
    const assetsFiles = fs.readdirSync(assetsPath);
    assetsFiles.forEach(async(file) => {
      const filepath = path.join(assetsPath, file);
      const key = `templates/${slugify(folder)}/preview/${file}`;
      console.log("uploading",key)
      await uploadToS3(filepath, key);
    });
    uploadedJSON[folder] = true;
    fs.writeFileSync(JSONPath, JSON.stringify(uploadedJSON, null, 2));
  }
);
generateTemplateMeta()
};
run().catch(console.error);
function slugify(name) {
  return name
    .toLowerCase() // lower case
    .trim() // remove leading/trailing spaces
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars (keep letters, numbers, spaces, and -)
    .replace(/\s+/g, "-") // replace spaces with "-"
    .replace(/-+/g, "-"); // collapse multiple "-" into one
}
