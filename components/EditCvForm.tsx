"use client";

import { useEffect } from "react";
import { useCompetences } from "@/components/useCompetences";
import { useExperiences } from "@/components/useExperiences";
import { useFormations } from "@/components/useFormations";
import { handleEdit } from "@/app/cv/modifier/saveEditAction";

export default function EditCvForm({ cv }: { cv: any }) {
  // --- HOOKS DYNAMIQUES ---

  const {
    competences,
    setCompetences,
    ajouterCompetence,
    changerCompetence,
    retirerCompetences,
  } = useCompetences();

  const {
    experiences,
    setExperiences,
    ajouterExperience,
    changerExperience,
    retirerExperiences,
  } = useExperiences();

  const {
    formations,
    setformations,
    ajouterFormation,
    changerFormation,
    retirerFormation,
  } = useFormations();

  // --- INITIALISATION DES CHAMPS AVEC LES DONNÉES EXISTANTES ---

  useEffect(() => {
    setCompetences(
      cv.competences && cv.competences.length > 0 ? cv.competences : [""]
    );

    setExperiences(
      cv.experiences && cv.experiences.length > 0 ? cv.experiences : [""]
    );

    setformations(
      cv.formations && cv.formations.length > 0 ? cv.formations : [""]
    );
  }, [cv]);

  // --- FORMULAIRE ---

  return (
    <form action={handleEdit} className="max-w-2xl mx-auto space-y-6 mt-28">
      <h1 className="text-3xl font-bold text-center mb-10">Modifier le CV</h1>

      {/* Informations */}
      <label>
        Nom :
        <input
          name="nom"
          defaultValue={cv.nom}
          className="border w-full p-2 mt-1 rounded-lg mb-5"
        />
      </label>

      <label>
        Prénom :
        <input
          name="prenom"
          defaultValue={cv.prenom}
          className="border w-full p-2 mt-1 rounded-lg mb-5"
        />
      </label>

      <label>
        Email :
        <input
          name="email"
          defaultValue={cv.email}
          className="border w-full p-2 mt-1 rounded-lg mb-5"
        />
      </label>

      <label>
        Téléphone :
        <input
          name="telephone"
          defaultValue={cv.telephone}
          className="border w-full p-2 mt-1 rounded-lg mb-5"
        />
      </label>

      <label>
        Ville :
        <input
          name="ville"
          defaultValue={cv.ville}
          className="border w-full p-2 mt-1 rounded-lg mb-5"
        />
      </label>

      <label>
        Github :
        <input
          name="github"
          defaultValue={cv.github}
          className="border w-full p-2 mt-1 rounded-lg mb-5"
        />
      </label>

      <label>
        Portfolio :
        <input
          name="portfolio"
          defaultValue={cv.portfolio}
          className="border w-full p-2 mt-1 rounded-lg mb-5"
        />
      </label>

      <label>
        Objectif :
        <input
          name="objectif"
          defaultValue={cv.objectif}
          className="border w-full p-2 mt-1 rounded-lg mb-10"
        />
      </label>

      {/* ---------- COMPETENCES ---------- */}
      <label className="block mb-4">
        Compétences :
        <div className="mt-2 space-y-3">
          {competences.map((competence, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                name="competences"
                value={competence}
                onChange={(e) => changerCompetence(index, e.target.value)}
                className="border w-full p-2 rounded-lg"
              />

              {index === competences.length - 1 && (
                <>
                  <button
                    type="button"
                    onClick={ajouterCompetence}
                    className="px-3 py-2 bg-blue-500 text-white rounded"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={retirerCompetences}
                    className="px-3 py-2 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </label>

      {/* ---------- EXPERIENCES ---------- */}
      <label className="block mb-4">
        Expériences :
        <div className="mt-2 space-y-3">
          {experiences.map((experience, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                name="experiences"
                value={experience}
                onChange={(e) => changerExperience(index, e.target.value)}
                className="border w-full p-2 rounded-lg"
              />

              {index === experiences.length - 1 && (
                <>
                  <button
                    type="button"
                    onClick={ajouterExperience}
                    className="px-3 py-2 bg-blue-500 text-white rounded"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={retirerExperiences}
                    className="px-3 py-2 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </label>

      {/* ---------- FORMATIONS ---------- */}
      <label className="block mb-4">
        Formations :
        <div className="mt-2 space-y-3">
          {formations.map((formation, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                name="formations"
                value={formation}
                onChange={(e) => changerFormation(index, e.target.value)}
                className="border w-full p-2 rounded-lg"
              />

              {index === formations.length - 1 && (
                <>
                  <button
                    type="button"
                    onClick={ajouterFormation}
                    className="px-3 py-2 bg-blue-500 text-white rounded"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={retirerFormation}
                    className="px-3 py-2 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </label>

      {/* ---------- INTERETS ---------- */}
      <label>
        Centres d'intérêt :
        <textarea
          name="centresInteret"
          defaultValue={cv.centresInteret}
          className="border w-full p-2 mt-1 rounded-lg mb-5"
        />
      </label>

      {/* Bouton sauvegarde */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white p-3 rounded-lg"
      >
        Sauvegarder les modifications
      </button>
    </form>
  );
}
