const express = require('express');
const app = express();
const port = 3000;
const calculateRoute = require('./routes/calculate');

// Middleware pour gérer les données JSON
app.use(express.json());

// Utiliser la route de calcul
app.use('/api', calculateRoute);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
