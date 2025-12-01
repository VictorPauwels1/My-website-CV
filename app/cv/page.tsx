import { getCv } from "@/lib/getCv";
import Link from "next/link";

export default async function CvPage() {
  const cv = await getCv();

  if (!cv) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl font-semibold mb-4">Aucun CV pour l'instant.</p>
        <Link
          href="/cv/ajouter"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ajouter un CV
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 mt-24">
      <h1 className="text-3xl font-bold mb-6">
        CV de {cv.prenom} {cv.nom}
      </h1>

      {/* Informations personnelles */}
      <section className="border p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Informations personnelles</h2>
        <p>Email : {cv.email}</p>
        <p>Téléphone : {cv.telephone}</p>
        <p>Ville : {cv.ville}</p>

        {cv.github && (
          <p>
            Github :{" "}
            <a href={cv.github} className="underline">
              {cv.github}
            </a>
          </p>
        )}
        {cv.portfolio && (
          <p>
            Portfolio :{" "}
            <a href={cv.portfolio} className="underline">
              {cv.portfolio}
            </a>
          </p>
        )}
      </section>

      {/* Objectif */}
      <section className="border p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Objectif professionnel</h2>
        <p>{cv.objectif}</p>
      </section>

      {/* Compétences */}
      <section className="border p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Compétences</h2>
        <ul className="list-disc list-inside">
          {cv.competences.map((c: string, i: number) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {/* Expériences */}
      <section className="border p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Expériences</h2>
        <ul className="list-disc list-inside">
          {cv.experiences.map((exp: string, i: number) => (
            <li key={i}>{exp}</li>
          ))}
        </ul>
      </section>

      {/* Formations */}
      <section className="border p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Formations</h2>
        <ul className="list-disc list-inside">
          {cv.formations.map((f: string, i: number) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      {/* Centres d’intérêt */}
      <section className="border p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Centres d'intérêt</h2>
        <p>{cv.interets}</p>
      </section>

      {/* Lien pour modifier le CV */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        <Link href="/cv/modifier">Modifier le CV</Link>
      </button>
    </div>
  );
}
