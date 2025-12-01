import { promises as fs } from "fs";
import path from "path";

export async function getCv() {
  const filePath = path.join(process.cwd(), "data", "cv.json");

  try {
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);

    // Si le fichier existe mais est vide
    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    return data;
  } catch (err: any) {
    // Le fichier n'existe pas encore → aucun CV
    return null;
  }
}
