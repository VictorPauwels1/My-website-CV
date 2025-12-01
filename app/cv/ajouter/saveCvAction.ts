"use server";

import { redirect } from "next/navigation";
import { saveCv } from "@/lib/saveCv";

export async function handleSubmit(formData: FormData) {
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
    formations: formData.getAll("formations"),

    interets: formData.get("interets"),
  };

  await saveCv(cv);

  // LA REDIRECTION CORRECTE :
  redirect("/cv");
}
