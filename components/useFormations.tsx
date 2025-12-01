"use client";

import { useState } from "react";

export function useFormations() {
  const [formations, setformations] = useState([""]);

  function ajouterFormation() {
    setformations([...formations, ""]);
  }

  function retirerFormation() {
    if (formations.length > 1) {
      setformations(formations.slice(0, -1));
    }
  }

  function changerFormation(index: number, valeur: string) {
    const copie = [...formations];
    copie[index] = valeur;
    setformations(copie);
  }

  return {
    formations,
    ajouterFormation,
    changerFormation,
    retirerFormation,
    setformations,
  };
}
