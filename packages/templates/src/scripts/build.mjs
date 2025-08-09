import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv"
dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), "../Templates");
const metaFilePath = path.resolve(__dirname, "../metaData.ts");

export const generateTemplateMeta =  () => {
  const templates = fs.readdirSync(__dirname).filter((name) => !name.includes("components"));

  const metaEntries = [];

  for (const templateFolder of templates) {
   if( !fs.statSync(path.join(__dirname,templateFolder)).isDirectory()) {

    continue
   }
    const templateImportName = templateFolder.replace(/[^a-zA-Z0-9 ]/g, "")     // Remove special characters but keep spaces
    .trim()
    .replace(/\s+/g, "_");  ;

    let thumbnailUrl = `${process.env.S3_PUBLIC_ENDPOINT}/templates/${templateFolder}/preview/desktop-dark.png`;
    let videoUrl = `${process.env.S3_PUBLIC_ENDPOINT}/templates/${templateFolder}/preview/vid.mp4`;

    metaEntries.push({
      id: templateFolder,
      title: templateFolder, // You can extract this from a config file per template
      description: "Template Description",
      componentName: templateImportName,
      thumbnail: thumbnailUrl,
      video: videoUrl,
    });
  }

  // Generate TypeScript file
  const imports = metaEntries
    .map(
      (entry) =>
        `import { ${entry.componentName} } from "./Templates";`
    )
    .join("\n");

  const dataArray = metaEntries
    .map(
      (entry) => `  {
    id: "${entry.id}",
    title: "${entry.title}",
    description: "${entry.description}",
    thumbnail: "${entry.thumbnail}",
    video: "${entry.video}",
    component: ${entry.componentName},
  }`
    )
    .join(",\n");

  const finalTS = `import { TemplateData } from "@workspace/types";
${imports}

export const Data: TemplateData[] = [
${dataArray}
];
`;

  fs.writeFileSync(metaFilePath, finalTS);
  console.log(`✅ Metadata written to ${metaFilePath}`);
};