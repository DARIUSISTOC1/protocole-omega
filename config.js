// CONFIGURATION DU JEU PROTOCOLE OMEGA
const GAME_CONFIG = {
  // Config Supabase (à remplir à l'étape du déploiement)
  SUPABASE_URL: "VOTRE_SUPABASE_URL",
  SUPABASE_KEY: "VOTRE_SUPABASE_ANON_KEY",

  // Liste des phases du jeu
  phases: {
    1: {
      code: "PHASE 01 // OBJECTIF INIT",
      instruction: "ACCÈS AUTORISÉ. Récupérez le module Alpha situé sous l'escalier central, puis entrez les coordonnées sur le terminal B.",
      audioSignal: true // Optionnel
    },
    2: {
      code: "PHASE 02 // EXTRACTION",
      instruction: "L'artefact est stabilisé. Rendez-vous immédiatement au point d'extraction Zone Nord.",
    },
    3: {
      code: "PHASE 03 // FIN DE PROTOCOLE",
      instruction: "Protocole complété. Mission réussie.",
    }
  }
};
