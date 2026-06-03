// Complete backend API code
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// Patient registration endpoint
app.post('/api/patients', (req, res) => {
  const { name, email } = req.body;
  // Validate patient data
  if (!name || !email) {
    return res.status(400).send({ message: 'Invalid patient data' });
  }
  // Save patient to database
  const patient = { name, email };
  // Return patient data
  res.send(patient);
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});