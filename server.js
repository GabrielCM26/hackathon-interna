const express = require('express');
const next = require('next');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./lib/mongodb');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const app = express();

app.use(cors());
app.use(express.json());

// ======== API ROUTES ========
app.use('/api/trees', require('./routes/trees'));
app.use('/api/donations', require('./routes/donations'));
app.use('/api/events', require('./routes/events')); // 🔥 NÃO ESQUECER!

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: '🌳 Verde Lab API rodando!',
    timestamp: new Date().toISOString(),
  });
});

// ======== NEXT.JS HANDLING ========
app.use((req, res) => handle(req, res)); // ✅ Sem 'next' aqui

const PORT = process.env.PORT || 3000;

const iniciarServidor = async () => {
  try {
    await connectDB();
    await nextApp.prepare();
    app.listen(PORT, () => {
      console.log(`✅ Servidor Next.js + Express rodando em http://localhost:${PORT}`);
      console.log(`🌳 API disponível em http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar servidor:', error);
    process.exit(1);
  }
};

iniciarServidor();