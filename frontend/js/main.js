// Vérifier si le navigateur supporte les Service Workers
if ('serviceWorker' in navigator) {
  // Enregistrer le Service Worker
  navigator.serviceWorker.register('./service-worker.js')
    .then((registration) => {
      console.log('Service Worker enregistré avec succès:', registration.scope);
    })
    .catch((error) => {
      console.error('Échec de l\'enregistrement du Service Worker:', error);
    });
}

// Écouteur d'événement pour la mise à jour du Service Worker
navigator.serviceWorker.addEventListener('controllerchange', () => {
  console.log('Un nouveau Service Worker a pris le contrôle de la page.');
});

// Gérer les notifications pour les utilisateurs si une nouvelle version de l'application est disponible
let refreshing;
navigator.serviceWorker.addEventListener('controllerchange', () => {
  if (refreshing) return;
  window.location.reload();
  refreshing = true;
});
