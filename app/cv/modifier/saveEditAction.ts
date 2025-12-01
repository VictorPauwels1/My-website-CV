"use server";

import { saveCv } from "@/lib/saveCv";
import { redirect } from "next/navigation";

export async function handleEdit(formData: FormData) {
  const cv = {
    nom: formData.get("nom"),
    prenom: formData.get("prenom"),
    email: formData.get("email"),
    telephone: formData.get("telephone"),
    ville: formData.get("ville"),
    github: formData.get("github"),
    portfolio: formData.get("portfolio"),
    objectif: formData.get("objectif"),

    competences: formData.getAll("competences"),
    experiences: formData.getAll("experiences"),
    formations: formData.getAll("formations"), // 👈 MANQUAIT
    interets: formData.get("interets"), // 👈 MANQUAIT
  };

  await saveCv(cv);

  redirect("/cv");
}
