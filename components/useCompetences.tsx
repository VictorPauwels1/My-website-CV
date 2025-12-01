"use client";

import { useState } from "react";

export function useCompetences() {
  const [competences, setCompetences] = useState([""]);

  function ajouterCompetence() {
    setCompetences([...competences, ""]);
  }

  function retirerCompetences() {
    if (competences.length > 1) {
      setCompetences(competences.slice(0, -1));
    }
  }

  function changerCompetence(index: number, valeur: string) {
    const copie = [...competences];
    copie[index] = valeur;
    setCompetences(copie);
  }

  return {
    competences,
    ajouterCompetence,
    changerCompetence,
    retirerCompetences,
    setCompetences,
  };
}
