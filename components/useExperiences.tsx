"use client";

import { useState } from "react";

export function useExperiences() {
  const [experiences, setExperiences] = useState([""]);

  function ajouterExperience() {
    setExperiences([...experiences, ""]);
  }

  function retirerExperiences() {
    if (experiences.length > 1) {
      setExperiences(experiences.slice(0, -1));
    }
  }

  function changerExperience(index: number, valeur: string) {
    const copie = [...experiences];
    copie[index] = valeur;
    setExperiences(copie);
  }

  return {
    experiences,
    ajouterExperience,
    changerExperience,
    retirerExperiences,
    setExperiences,
  };
}
