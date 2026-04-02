"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  FileText,
  BookOpen,
  Download,
  X,
  Eye,
  ChevronRight,
} from "lucide-react";

// Couleurs de la charte
const colors = {
  teal: "#43A497",
  red: "#EF2E25",
  bg: "#F9FAFB",
};

const MockupResultPage = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Fausses données pour l'exemple
  const results = [
    {
      id: 1,
      type: "THESE",
      title:
        "Optimisation des réseaux de capteurs sans fil pour l'agriculture de précision dans l'Adamaoua",
      author: "TCHINDA, Rodrigue",
      year: 2023,
      establishment: "IUT Ngaoundéré",
      snippet:
        "Cette thèse propose une nouvelle approche de routage énergétique pour prolonger la durée de vie des capteurs...",
      hasPdf: true,
    },
    {
      id: 2,
      type: "ARTICLE",
      title: "Impact de l'IA sur la détection précoce des maladies bovines",
      author: "Dr. ABBA, Oumarou",
      year: 2024,
      establishment: "FS (Faculté des Sciences)",
      snippet:
        "Une étude comparative des modèles CNN appliqués à l'imagerie vétérinaire locale.",
      hasPdf: false, // Pas de visionneuse pour les articles
    },
    {
      id: 3,
      type: "MEMOIRE",
      title: "Conception d'une plateforme de e-learning adaptative",
      author: "BILOUNGA, Sarah",
      year: 2022,
      establishment: "ENSAI",
      snippet:
        "Mémoire de fin d'études portant sur l'utilisation des algorithmes de recommandation...",
      hasPdf: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
      {/* --- HEADER (Compact) --- */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            {/* Placeholder logo simplifié */}
            <div className="font-bold text-2xl tracking-tighter">
              <span style={{ color: colors.teal }}>UNI</span>
              <span style={{ color: colors.red }}>Pub</span>
            </div>
          </div>

          {/* Barre de recherche centrale */}
          <div className="flex-1 max-w-2xl mx-8 relative">
            <input
              type="text"
              defaultValue="Intelligence Artificielle"
              className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
              style={{ "--tw-ring-color": colors.teal }}
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>

          {/* Menu Utilisateur */}
          <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
            <span className="hover:text-teal-600 cursor-pointer">
              Mes favoris
            </span>
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold border border-teal-200">
              JS
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 max-w-7xl mx-auto w-full flex overflow-hidden">
        {/* 1. SIDEBAR (Filtres) */}
        <aside className="w-64 bg-white border-r border-gray-200 p-6 hidden md:block overflow-y-auto h-[calc(100vh-64px)] scrollbar-thin">
          <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold">
            <Filter className="w-5 h-5" /> Filtres
          </div>

          {/* Groupe de filtres : Type */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Type de document
            </h3>
            <div className="space-y-2">
              {["Thèse (45)", "Mémoire (120)", "Article (85)"].map(
                (label, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-teal-700 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="rounded text-teal-600 focus:ring-teal-500"
                      defaultChecked={i === 0}
                    />
                    {label}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Groupe de filtres : Année */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Année
            </h3>
            <div className="space-y-2">
              {["2024", "2023", "2022", "2015-2021"].map((label, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-teal-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="rounded text-teal-600 focus:ring-teal-500"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Groupe de filtres : Établissement */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Établissement
            </h3>
            <select className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500">
              <option>Tous les établissements</option>
              <option>IUT</option>
              <option>FS (Sciences)</option>
              <option>ENSAI</option>
            </select>
          </div>
        </aside>

        {/* 2. LISTE DES RÉSULTATS */}
        <main
          className={`flex-1 p-6 overflow-y-auto h-[calc(100vh-64px)] transition-all duration-300 ${
            selectedPdf ? "w-1/2" : "w-full"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              3 résultats trouvés
            </h2>
            <select className="text-sm border-gray-200 rounded-md text-gray-500">
              <option>Trier par : Pertinence</option>
              <option>Plus récent</option>
            </select>
          </div>

          <div className="space-y-4">
            {results.map((res) => (
              <div
                key={res.id}
                className={`bg-white p-5 rounded-lg border hover:shadow-md transition-shadow group ${
                  selectedPdf === res.id
                    ? "border-teal-500 ring-1 ring-teal-500"
                    : "border-gray-200"
                }`}
              >
                {/* Badge Type */}
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide ${
                      res.type === "THESE"
                        ? "bg-purple-100 text-purple-700"
                        : res.type === "ARTICLE"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {res.type}
                  </span>
                  <span className="text-xs text-gray-400">{res.year}</span>
                </div>

                {/* Titre */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight group-hover:text-teal-700 cursor-pointer">
                  {res.title}
                </h3>

                {/* Auteur & Labo */}
                <div className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                  <span className="font-medium text-gray-700">
                    {res.author}
                  </span>{" "}
                  • <span>{res.establishment}</span>
                </div>

                {/* Snippet */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {res.snippet}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
                  {/* Bouton Visionneuse (Conditionnel) */}
                  {res.hasPdf ? (
                    <button
                      onClick={() =>
                        setSelectedPdf(res.id === selectedPdf ? null : res.id)
                      }
                      className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      {selectedPdf === res.id ? "Masquer" : "Aperçu PDF"}
                    </button>
                  ) : (
                    <span className="text-xs text-gray-400 italic flex items-center gap-1">
                      <FileText className="w-3 h-3" /> Aperçu non disponible
                    </span>
                  )}

                  {/* Bouton Détails */}
                  <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 ml-auto">
                    Voir détails <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* 3. VISIONNEUSE PDF (Drawer Latéral) */}
        {selectedPdf && (
          <aside className="w-[45%] bg-gray-100 border-l border-gray-200 h-[calc(100vh-64px)] flex flex-col shadow-xl animate-in slide-in-from-right duration-300">
            <div className="bg-white p-3 border-b border-gray-200 flex justify-between items-center shadow-sm z-10">
              <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-600" /> Visionneuse PDF
              </span>
              <div className="flex gap-2">
                <button
                  className="p-1.5 hover:bg-gray-100 rounded text-gray-500"
                  title="Télécharger"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="p-1.5 hover:bg-red-50 hover:text-red-600 rounded text-gray-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Simulation du PDF */}
            <div className="flex-1 overflow-y-auto p-8 bg-gray-500/10 flex justify-center">
              <div className="w-full max-w-[90%] bg-white shadow-lg min-h-[800px] p-10 relative">
                {/* Contenu Fake du PDF */}
                <div className="border-b-2 border-gray-800 pb-4 mb-8 text-center">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Université de Ngaoundéré
                  </p>
                  <h1 className="text-2xl font-serif font-bold text-black mb-4">
                    THÈSE DE DOCTORAT
                  </h1>
                  <p className="text-sm text-gray-600">
                    Présentée par Rodrigue Tchinda
                  </p>
                </div>
                <div className="space-y-4 text-gray-300 text-xs select-none">
                  <div className="h-2 bg-gray-200 w-full rounded"></div>
                  <div className="h-2 bg-gray-200 w-full rounded"></div>
                  <div className="h-2 bg-gray-200 w-3/4 rounded"></div>
                  <div className="h-2 bg-gray-200 w-full rounded"></div>
                  <div className="h-2 bg-gray-200 w-5/6 rounded"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="text-gray-400 font-bold text-xl opacity-20 -rotate-45">
                    DOCUMENT PREVIEW
                  </p>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default MockupResultPage;
