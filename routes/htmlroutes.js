
const path = require('path');
const router = require('express').Router();

// "/notes" responds with the stats.html file
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// All other routes respond with the exercise.html file
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

module.exports = router;
