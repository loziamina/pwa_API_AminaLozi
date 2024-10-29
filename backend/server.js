// server.js
const express = require('express');
const app = express();
const port = 3000;
const calculateRoute = require('./routes/calculate');

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Route pour les calculs
app.use('/api', calculateRoute);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
