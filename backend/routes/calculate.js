// routes/calculate.js
const express = require('express');
const router = express.Router();

// Route pour effectuer les calculs
router.post('/calculate', (req, res) => {
  const { operation, num1, num2 } = req.body;

  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num2 !== 0 ? num1 / num2 : 'Erreur : Division par zéro';
      break;
    default:
      return res.status(400).json({ error: 'Opération non valide' });
  }

  res.json({ result });
});

module.exports = router;
