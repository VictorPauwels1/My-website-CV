"use server";

import { promises as fs } from "fs";
import path from "path";

export async function saveCv(cvData: any) {
  const folderPath = path.join(process.cwd(), "data");
  const filePath = path.join(folderPath, "cv.json");

  // Créer le dossier si il n'existe pas
  try {
    await fs.mkdir(folderPath, { recursive: true });
  } catch (e) {
    console.error("Erreur création dossier :", e);
  }

  // Écrire le fichier
  await fs.writeFile(filePath, JSON.stringify(cvData, null, 2), "utf-8");
}
