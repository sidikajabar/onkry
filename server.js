const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Main routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/academy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'academy.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/developers', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'developers.html'));
});

app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

app.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'terms.html'));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

app.get('/skill.md', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kryon-skill.md'));
});

// API endpoints
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Kryon API is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/stats', (req, res) => {
  // Demo data with variation for "live" feel
  const variation = Math.floor(Math.random() * 10);
  
  res.json({
    totalAgents: 156 + variation,
    totalPerformances: 2431 + variation * 3,
    totalFans: 48250 + variation * 50,
    lastUpdated: new Date().toISOString()
  });
});

app.get('/api/agents', (req, res) => {
  res.json({ 
    agents: [],
    message: 'Connect your database to start saving agents'
  });
});

app.post('/api/agents', (req, res) => {
  // Mock agent creation
  const { name, persona } = req.body;
  const mockAgent = {
    id: Date.now(),
    name: name || 'New Agent',
    persona: persona || 'cute',
    level: 1,
    xp: 0,
    fans: 0,
    performances: 0,
    signatureMoves: [],
    claimLink: `https://kryonstage.com/claim/${Date.now()}`,
    createdAt: new Date().toISOString()
  };
  
  res.json({
    success: true,
    agent: mockAgent
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Kryon Stage running on http://localhost:${PORT}`);
  console.log(`📊 Stats API: http://localhost:${PORT}/api/stats`);
  console.log(`🏠 Landing: http://localhost:${PORT}/`);
  console.log(`🎭 Academy: http://localhost:${PORT}/academy`);
  console.log(`🔐 Login: http://localhost:${PORT}/login`);
});
