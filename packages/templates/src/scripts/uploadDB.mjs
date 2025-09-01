import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {  PrismaClient } from "@workspace/db";

const __filename = fileURLToPath(import.meta.url);
const templatesDir = path.resolve(path.dirname(__filename), "../Templates");
const metaFilePath = path.resolve(templatesDir, "../metaData.ts");
const prisma = new PrismaClient();
const uploadToDB = async () => {
  const data = fs
    .readFileSync(metaFilePath, { encoding: "utf-8" })
    .split("=")[1]
    .replace(";", "")
    .replace(/component:\s*\w+,?/g, "component: null,")
    .replace(/,(\s*})/g, "$1");
  const Templates = new Function(`return ${data}`)();
  try {
    const promises = Templates.map(async(template) => {
      if (await prisma.template.findUnique({ where: { title: template.title } })) {
        console.log(`${template.title} already exists. Skipping ...`);
      } else
        return prisma.template.create({
          data: {
            title: template.title,
            category: template.category,
            INRpricing:template.INRpricing,
            USDpricing:template.USDpricing
          },
        });
    });
    let bool = await Promise.all(promises);
    console.log(bool);
  } catch (e) {
    console.log(e);
  }
};
uploadToDB();
