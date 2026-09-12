// CONFIGURATION DU JEU PROTOCOLE OMEGA
const GAME_CONFIG = {
  // Config Supabase (à remplir à l'étape du déploiement)
  SUPABASE_URL: "https://bqewnmhdghaxxvtmpebp.supabase.co",
  SUPABASE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxZXdubWhkZ2hheHh2dG1wZWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMTYyMDUsImV4cCI6MjEwNDc5MjIwNX0.nj5jkQVSqe1hcPxIMpWbj_FjlsI5slWqcyLgspS_vl8",

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
