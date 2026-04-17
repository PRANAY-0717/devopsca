const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ response: 'running' });
});

app.get('/', (req, res) => {
  res.send('Welcome to the Server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
