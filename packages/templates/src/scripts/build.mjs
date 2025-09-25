import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const templatesDir = path.resolve(path.dirname(__filename), "../Templates");
const metaFilePath = path.resolve(templatesDir, "../metaData.ts");

export const generateTemplateMeta = () => {
  const templates = fs
    .readdirSync(templatesDir)
    .filter((name) => !name.includes("components"));

  // Read existing file if it exists
  let existingContent = "";
  let existingImports = "";
  let existingDataArray = "";

  if (fs.existsSync(metaFilePath)) {
    existingContent = fs.readFileSync(metaFilePath, "utf8");

    // Extract imports
    const importMatches = existingContent.match(
      /import {[^}]+} from ".\/Templates";/g
    );
    if (importMatches) {
      existingImports = importMatches.join("\n");
    }

    // Extract Data array content
    const dataMatch = existingContent.match(
      /export const Data: TemplateData\[\] = \[([\s\S]*?)\];/
    );
    if (dataMatch) {
      existingDataArray = dataMatch[1].trim();
    }
  }

  let updatedImports = existingImports;
  let updatedDataArray = existingDataArray;

  for (const templateFolder of templates) {
    if (!fs.statSync(path.join(templatesDir, templateFolder)).isDirectory()) {
      continue;
    }

    const templateImportName = templateFolder
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .trim()
      .replace(/\s+/g, "_");

    let thumbnailUrl = `${process.env.S3_PUBLIC_ENDPOINT}/templates/${slugify(templateFolder)}/preview/desktop-dark.png`;
    let videoUrl = `${process.env.S3_PUBLIC_ENDPOINT}/templates/${slugify(templateFolder)}/preview/vid.mp4`;

    // Add import if missing
    if (!updatedImports.includes(templateImportName)) {
      updatedImports += `\nimport { ${templateImportName} } from "./Templates";`;
    }

    // Add object if missing
    if (!updatedDataArray.includes(`id: "${slugify(templateFolder)}"`)) {
      const newEntry = `  {
    id: "${slugify(templateFolder)}",
    title: "${templateFolder}",
    description: "Template Description",
    thumbnail: "${thumbnailUrl}",
    video: "${videoUrl}",
    component: ${templateImportName},
    mobileDevice: "Iphone15Pro",
    category: "FREE",
    INRpricing: 0,
    USDpricing: 0,
    theme:"both"
  }`;

      updatedDataArray = updatedDataArray
        ? `${updatedDataArray},\n${newEntry}`
        : newEntry;
    }
  }

  const finalTS = `import { TemplateData } from "@workspace/types";
${updatedImports.trim()}

export const Data: TemplateData[] = [
${updatedDataArray}
];
`;

  fs.writeFileSync(metaFilePath, finalTS, "utf8");
  console.log(`✅ Metadata updated in ${metaFilePath}`);
};
function slugify(name) {
  return name
    .toLowerCase() // lower case
    .trim() // remove leading/trailing spaces
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars (keep letters, numbers, spaces, and -)
    .replace(/\s+/g, "-") // replace spaces with "-"
    .replace(/-+/g, "-"); // collapse multiple "-" into one
}
