"use client";

import { useCompetences } from "@/components/useCompetences";
import { useExperiences } from "@/components/useExperiences";
import { useFormations } from "@/components/useFormations";
import { saveCv } from "@/lib/saveCv";
import Link from "next/link";
import { handleSubmit } from "./saveCvAction";

export default function AjouterCvPage() {
  // Hook pour gérer les compétences dynamiques
  const {
    competences,
    ajouterCompetence,
    changerCompetence,
    retirerCompetences,
  } = useCompetences();
  const {
    experiences,
    ajouterExperience,
    changerExperience,
    retirerExperiences,
  } = useExperiences();

  const { formations, ajouterFormation, changerFormation, retirerFormation } =
    useFormations();

  // ---- SERVER ACTION POUR ENREGISTRER LE CV ----

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Ajouter un CV</h1>
      <form action={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <label>
          {" "}
          Nom :
          <input
            name="nom"
            className="border w-full p-2 mt-1 rounded-lg mb-5"
          />
        </label>

        <label>
          {" "}
          Prénom :
          <input
            name="prenom"
            className="border w-full p-2 mt-1 rounded-lg mb-5"
          />
        </label>

        <label>
          {" "}
          Email :
          <input
            name="email"
            className="border w-full p-2 mt-1 rounded-lg mb-5"
          />
        </label>

        <label>
          {" "}
          Téléphone :
          <input
            name="telephone"
            className="border w-full p-2 mt-1 rounded-lg mb-5"
          />
        </label>

        <label>
          {" "}
          Ville :
          <input
            name="ville"
            className="border w-full p-2 mt-1 rounded-lg mb-5"
          />
        </label>

        <label>
          {" "}
          Github :
          <input
            name="github"
            className="border w-full p-2 mt-1 rounded-lg mb-5"
          />
        </label>

        <label>
          {" "}
          Portfolio :
          <input
            name="portfolio"
            className="border w-full p-2 mt-1 rounded-lg mb-5"
          />
        </label>

        <label>
          {" "}
          Objectif :
          <input
            name="objectif"
            className="border w-full p-2 mt-1 rounded-lg mb-10"
          />
        </label>

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
                      className="px-3.5 py-2 bg-red-500 text-white rounded"
                    >
                      -
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </label>

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
                      className="px-3.5 py-2 bg-red-500 text-white rounded"
                    >
                      -
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </label>

        <label className="block mb-4">
          Formations :
          <div className="mt-2 space-y-3">
            {formations.map((formations, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  name="formations"
                  value={formations}
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
                      className="px-3.5 py-2 bg-red-500 text-white rounded"
                    >
                      -
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </label>

        <label>
          {" "}
          Centres d'intérêt :
          <textarea
            name="centresInteret"
            className="border w-full p-2 mt-1 rounded-lg mb-5"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg"
        >
          Enregistrer le CV
        </button>
      </form>

      {/* 
        Tu auras accès dans ton formulaire à :
        - competences  (tableau des inputs)
        - ajouterCompetence  (fonction pour ajouter un champ)
        - changerCompetence  (modifier un champ précis)
        
        Tu vas donc les utiliser directement dans tes <input>
      */}

      {/* Exemple visuel de bouton retour */}
      <div className="mt-8 text-center">
        <Link
          href="/cv"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Retour au CV
        </Link>
      </div>
    </div>
  );
}
